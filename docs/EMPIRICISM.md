# Technical Empiricism & Findings: `gta5online-roadmap`

### Problem / Finding 1: React Flow Generic Type Constraint in XYFlow v12
* **Date**: 2026-10-24
* **Observation**: In `@xyflow/react` v12, passing custom node data interfaces into `Node<T>` or `useNodesState<Node<T>>` throws TypeScript error `TS2344 / TS2345: Type 'CustomNodeData' does not satisfy constraint 'Record<string, unknown>'`.
* **Root Cause**: `@xyflow/react` v12 enforces strict index signatures on node data definitions (`[key: string]: unknown`).
* **Resolution**: Extended `RoadmapNodeData` with `extends Record<string, unknown>`. This satisfied XYFlow's generic constraints while preserving strict typing on all application-level properties (`title`, `payout`, `stage`, `details`).

### Problem / Finding 2: Cross-Origin Audio Asset Security & Offline Reliability
* **Date**: 2026-10-24
* **Observation**: Relying on external audio files (e.g. `chime.mp3`) hosted on CDNs or static servers can fail under strict Content Security Policies (CSP) or when running locally/offline.
* **Root Cause**: Audio assets require additional network requests and can fail if CORS headers or file paths are misaligned.
* **Resolution**: Implemented a procedural Web Audio API chime synthesizer in `src/utils/audio.ts`. It synthesizes dual harmonic sine wave tones (G5 at 783.99 Hz and C6 at 1046.50 Hz) directly via the browser's audio hardware with zero external dependencies and zero latency.

### Problem / Finding 3: SPA Deep Linking & Fallback Routing in Nginx
* **Date**: 2026-10-24
* **Observation**: Client-side single page applications built with Vite fail with 404 Not Found on container refresh when accessing nested routes unless fallback rules exist.
* **Resolution**: Added `try_files $uri $uri/ /index.html;` in `nginx.conf` and configured long-lived asset caching headers (`expires 1y; add_header Cache-Control "public, no-transform";`) for all JS, CSS, and SVG chunks.

### Problem / Finding 4: OpenShip CI Workflow Engine & Routing Schema
* **Date**: 2026-10-26
* **Observation**: Configuring OpenShip CI workflows requires adhering to GitHub Actions-compatible YAML schemas. Placing files under `.openship/workflows/` targets OpenShip's internal runner engine (powered by `act`) without triggering external GitHub Actions runs, while `.github/workflows/` triggers GitHub-coordinated runners.
* **Root Cause**: OpenShip integrates `@actions/workflow-parser` and `act` to provide 100% GitHub-compatible workflow definitions with scoped runner labels (`[self-hosted, openship, linux]`). Furthermore, `openship.json` defines reverse-proxy rewrite rules (`routes.rewrites`) requiring `{ source: "/(.*)", destination: "/index.html" }` for SPA routing.
* **Resolution**: Created `.openship/workflows/ci.yml` (multi-job pipeline with TypeScript typechecking, Vite SPA build verification, and container preflight) and dual-compatible `.github/workflows/ci.yml`. Validated the workflow syntax against `/api/actions/preview` and validated `openship.json` with `openship config validate`.

### Problem / Finding 5: OpenShip Static Extraction vs Standalone Docker Web Workload
* **Date**: 2026-10-27
* **Observation**: Running `openship deploy --folder` on a containerized web project failed with `Static extract failed: (HTTP code 404) no such container - Could not find the file /workspace in container...`. Additionally, adding a domain resulted in `Pre-deploy checks failed: Endpoint target (/): Server deployments must expose port-targeted routes`.
* **Root Cause**: OpenShip's deployment auto-detector inspects `package.json` and if no `startCommand` is detected, defaults `workloadType: "static"`, causing the engine to mount the built container and attempt to copy out `/workspace` to serve via edge static files. Furthermore, domains on static deployments expect path targets (`targetPath: "/"`), whereas server deployments require port targets (`targetPort: 80`).
* **Resolution**: Configured `openship.json` with explicit runtime and workload specifications (`workload: "web"`, `productionMode: "standalone"`, `runtime: "docker"`, `startCommand: "nginx -g 'daemon off;'"` and `port: 80`). Re-created the domain with `targetPort: 80`. OpenShip successfully deployed the multi-stage Docker container (`openship-gta5online-roadmap-dep_*`) listening on port 20000 with OpenResty edge proxying incoming traffic.

### Problem / Finding 6: Native OpenShip Actions Runner Execution & Standalone CI Dispatch
* **Date**: 2026-10-27
* **Observation**: Dispatching an Actions workflow with a GitHub owner/repo on a self-hosted instance without GitHub OAuth connected failed with `ACTIONS_GITHUB_IDENTITY_REQUIRED`. Subsequently, `actions/checkout@v4` on the self-hosted native runner failed with `::error::Input required and not supplied: token`.
* **Root Cause**: When a workflow specifies an external GitHub owner/repo, OpenShip validates caller identity against the user's connected GitHub identity. In standalone mode without GitHub OAuth, setting `owner: null` and `repo: null` allows OpenShip to use the instance's local identity and `workflow_dispatch` trigger. Additionally, `actions/checkout@v4` expects an automated `GITHUB_TOKEN` which does not exist in standalone runner sessions.
* **Resolution**: Enabled a native host runner (`arunner_veJjgDepaEosyJo9`) on "This Server" with labels `[self-hosted, openship, linux, x64, ubuntu-latest]`. Updated `.openship/workflows/ci.yml` to clone the target repository branch directly via `git clone --depth 1 -b dev-agy https://github.com/gabrielcruzg3/gta5online-roadmap.git .` and registered the workflow with local access policy. All three jobs (`typecheck`, `build-spa`, and `container-preflight`) ran successfully with full log telemetry.

### Problem / Finding 7: SRE Docker Compose Deployment & AutoKuma Integration via OpenShip CI
* **Date**: 2026-10-27
* **Observation**: Direct platform deployments often overwrite or ignore custom container labels (e.g. `kuma.*` for automated monitoring) and assign ephemeral internal proxy ports. The requirement was to combine automated CI verification (typechecking, SPA build) with deterministic `docker compose` deployments retaining arbitrary labels for homelab observability.
* **Root Cause**: AutoKuma watches the host Docker daemon socket for containers carrying the `kuma.` label prefix. Containerized services attempting to monitor host-published ports cannot reach them via `localhost` (which refers to the monitor container itself); they must target the Docker host gateway (`http://172.17.0.1:<port>`). Furthermore, because the OpenShip native runner operates with `allowDockerSocket: true`, it can execute `docker compose` commands directly against the host Docker engine.
* **Resolution**: Updated `compose.yaml` with AutoKuma monitoring labels (`kuma.gta-roadmap.http.name=GTA 5 Online Roadmap`, `kuma.gta-roadmap.http.url=http://172.17.0.1:3000`). Replaced the passive preflight job in `.openship/workflows/ci.yml` with a `deploy-compose` stage that runs `docker compose -f compose.yaml config --quiet` followed by `docker compose -f compose.yaml up -d --build --remove-orphans` and health readiness polling. Dispatched the workflow via OpenShip Actions (`arun_fhDW8Gg7qzj7CAmC`); the pipeline succeeded in 38s, launched container `gta5online-roadmap` on port 3000, and AutoKuma immediately created HTTP monitor ID 11 in Uptime Kuma with 200 OK status.

