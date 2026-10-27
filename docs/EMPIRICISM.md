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
