# Agent Guidelines & Project Instructions: `gta5online-roadmap`

Welcome to `gta5online-roadmap`. This repository contains an interactive, visual GTA Online progression roadmap inspired by [roadmap.sh](https://roadmap.sh) ([nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap)) and informed by the [Reddit GTA Online Mega Guide](https://www.reddit.com/r/gtaonline/comments/7ohgg5/the_gta_online_mega_guide/) and modern DLC meta (Drug Wars, Chop Shop, Cluckin' Bell, Bottom Dollar, The Contract).

---

## 1. Quick Start & Developer Commands

```bash
# Install dependencies
npm install

# Run local development server (Vite on http://localhost:3000)
npm run dev

# Compile TypeScript and build production bundle
npm run build

# Preview production build locally
npm run preview
```

### Docker Commands
```bash
# Production Container
docker compose up -d --build

# Live Development Container (bind-mounted source, hot reload)
docker compose -f compose.dev.yaml up
```

### OpenShip & CI Workflows
```bash
# Validate OpenShip deploy configuration
openship config validate

# Preview OpenShip CI workflow parsing
openship api -X POST /actions/preview -d '{"path": ".openship/workflows/ci.yml", "controller": "openship"}'
```

---

## 2. Architecture & Directory Map

```text
gta5online-roadmap/
├── AGENTS.md                  # Project rules, workflows, commands
├── Dockerfile                 # Multi-stage production container build (Node 22 -> Nginx Alpine)
├── compose.yaml               # Production container orchestration
├── compose.dev.yaml           # Development container with hot reload
├── nginx.conf                 # SPA routing and static caching
├── docs/
│   ├── ARCHITECTURE.md        # System topology, XYFlow data model, state management
│   ├── DESIGN.md              # Design system, dark HUD theme tokens, UX tenets
│   ├── ROADMAP.md             # Capabilities matrix and release phases
│   └── EMPIRICISM.md          # Technical findings and framework quirks
├── public/                    # Favicon and static assets
└── src/
    ├── types/                 # Roadmap and timer TypeScript interfaces
    ├── data/
    │   ├── roadmap-nodes.ts   # Curated GTA Online milestones, stages, and timers
    │   └── graph-layout.ts    # Node position calculations and progression edges
    ├── hooks/
    │   └── useRoadmapProgress.ts # LocalStorage state persistence and stats calculation
    ├── utils/
    │   └── audio.ts           # Web Audio procedural timer chime synthesizer
    └── components/
        ├── roadmap/           # Canvas, Node cards, Detail Drawer, Header, ListView
        ├── timers/            # Cooldown Radar, 48m in-game clock, action timers
        └── vault/             # 5-Stop Vault Run checklist and session hop guide
```

---

## 3. Git Branch & Auto-Commit Policy (`dev-agy`)
* **Branch Policy**: Whenever working in this repository on branch `dev-agy`, automatically stage and commit completed documentation, features, or bug fixes with a clean Conventional Commit message (`feat:`, `fix:`, `docs:`, `refactor:`).
* **Dual-Layer Empiricism**: Keep `docs/EMPIRICISM.md` up to date with any non-trivial findings or framework quirks.
