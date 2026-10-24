# 🏙️ GTA 5 Online: Interactive Syndicate Roadmap & Cooldown Radar

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Flow](https://img.shields.io/badge/@xyflow/react-12.x-FF0072?logo=reactflow&logoColor=white)](https://xyflow.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

An interactive, visual progression roadmap and real-time companion for **Grand Theft Auto Online**. 

Modeled after the educational layout of [roadmap.sh](https://roadmap.sh) and backed by the curated wisdom of the [Reddit GTA Online Mega Guide](https://www.reddit.com/r/gtaonline/comments/7ohgg5/the_gta_online_mega_guide/) and modern DLC meta, this app guides players along the most efficient path from a broke newcomer (**$0**) to an automated criminal syndicate kingpin (**$10M+**).

---

## 🌟 Key Features

### 1. Interactive Visual Roadmap (`roadmap.sh` Style)
* **Smooth Pan & Zoom Canvas**: Built with `@xyflow/react` featuring custom nodes, connecting bezier/step progression paths, minimap navigation, and search/filtering.
* **6 Progression Stages**:
  * **Stage 1: The Fresh Criminal ($0 – $50k)**: Account basics, weapon challenges (**$775,000 startup cash** via Revolvers & Stone Hatchet), Flight School, and First Dose missions.
  * **Stage 2: Solo Hustler & VIP ($50k – $1.5M)**: VIP status unlock ($50k collateral), VIP Wave routine, Daily Stash Houses ($75k free supplies), Cluckin' Bell Farm Raid ($500k solo), and first high-end apartment.
  * **Stage 3: First Heavy Hitters ($1.5M – $2.5M)**: Acid Lab Brickade 6x6 solo deliveries ($335k – $502k), Kosatka Submarine, and Cayo Perico solo speedruns ($1.0M – $1.4M/hr).
  * **Stage 4: Active Operations Empire ($2.5M – $5M)**: Celebrity Solutions Agency (Franklin Payphone Hits & Dr. Dre $1M finale), Auto Shop (Union Depository $270k), and Salvage Yard Chop Shop.
  * **Stage 5: Passive Syndicate & Safes ($5M – $10M)**: Nightclub empire ($50k/day safe + passive warehouse), 10-second bouncer passive hack, Chumash Bunker gunrunning, MC Feeder trio, Arcade Master Control Terminal ($5k safe hack), and Bail Enforcement office.
  * **Stage 6: Master Endgame Routines ($10M+ Endgame)**: The Golden 48-Minute Vault Sweep Circuit, Diamond Casino Heist, Cayo Hard-Mode window lock, and the essential weaponized fleet.
* **Three View Modes**:
  * 🗺️ **Visual Canvas**: Interactive node tree with stage grouping and smooth bezier connections.
  * 📋 **Guide List View**: Clean, mobile-friendly vertical accordion cards.
  * 💰 **Vault Run Checklist**: The 5-stop passive safe circuit tracking real-time collected cash.

### 2. Slide-Over Detail Drawer
Clicking any node opens a comprehensive dossier:
* **Financial Metrics**: Payout, Setup Cost/Fee, Completion Time, Solo Friendliness, and Hourly Efficiency rate.
* **Prerequisites & Unlocks**: What properties or levels are required.
* **Numbered Walkthrough**: Step-by-step strategy for maximum efficiency.
* **Speedrun Pro-Tips**: Hidden community hacks (e.g. passive mode nightclub bouncer ejection, 1-game arcade cabinet duplication).
* **Direct Reddit Citations**: Direct links back to original r/gtaonline community guides.
* **Status Switcher**: Track milestones as `To Do`, `In Progress`, `Done`, or `Skip`.

### 3. Cooldown Radar & GTA Clock (The Plus)
* **In-Game 48-Minute Day Clock**: Synchronized loop tracking when passive wall safes generate revenue.
* **One-Tap Cooldowns**:
  * Franklin Payphone Hit (10m)
  * Cayo Perico Solo Cooldown & Hard Mode Window (144m)
  * Tow Truck Scrap Processing (48m)
  * Agency Security Contract (5m)
* **Procedural Web Audio Alerts**: Dual harmonic chime (G5 $\rightarrow$ C6) synthesized directly via the browser's native Web Audio API (100% offline, zero external audio files).

### 4. Progress Persistence & Rewards
* Automatically saves milestone progress to browser `localStorage`.
* Triggers celebratory confetti upon marking operations complete.
* Real-time progress bar tracking overall syndicate completion percentage.

---

## 🚀 Quick Start

### Option A: Local Development (Vite)

```bash
# Clone the repository
git clone https://github.com/gabrielcruzg3/gta5online-roadmap.git
cd gta5online-roadmap

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option B: Docker Compose (Production Staging)

```bash
# Build and run production multi-stage container
docker compose up -d --build
```

Access the app at [http://localhost:3000](http://localhost:3000).

To stop the container:
```bash
docker compose down
```

---

## 🛠️ Project Structure

```text
gta5online-roadmap/
├── AGENTS.md                  # Project rules, workflows, commands
├── Dockerfile                 # Multi-stage production container (Node 22 -> Nginx Alpine)
├── compose.yaml               # Production container orchestration
├── compose.dev.yaml           # Development container with hot reload
├── nginx.conf                 # SPA routing and static asset caching
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
    │   └── graph-layout.ts    # Node coordinate layout and edge connections
    ├── hooks/
    │   └── useRoadmapProgress.ts # LocalStorage state persistence and stats
    ├── utils/
    │   └── audio.ts           # Web Audio procedural timer chime synthesizer
    └── components/
        ├── roadmap/           # Canvas, Node cards, Detail Drawer, Header, ListView
        ├── timers/            # Cooldown Radar, 48m in-game clock, action timers
        └── vault/             # 5-Stop Vault Run checklist & session-hop guide
```

---

## 📚 References & Acknowledgments

This project stands on the shoulders of the GTA Online community's exhaustive research, guides, and open-source tooling:

### 1. The Reddit GTA Online Mega Guide
* **Primary Reference**: [The GTA Online Mega Guide (r/gtaonline)](https://www.reddit.com/r/gtaonline/comments/7ohgg5/the_gta_online_mega_guide/)
* **Notable Community Authors & Guides**:
  * *Broke to Millionaire* by [u/L131](https://www.reddit.com/user/L131/) & [u/K2Widowmaker](https://www.reddit.com/user/K2Widowmaker/)
  * *VIP "Wave" Method for Continuous Money Grinding* by [u/Psychko](https://www.reddit.com/user/Psychko/)
  * *Overview of Major Money Making Methods* by [u/Dreamex](https://www.reddit.com/user/Dreamex/)
  * *Contact Missions Guide & FAQ* by [u/GlassGoose45](https://www.reddit.com/user/GlassGoose45/) & [u/bleeps__](https://www.reddit.com/user/bleeps__/)
  * *Biker Work & Businesses Guide* by [u/ErregungHaus](https://www.reddit.com/user/ErregungHaus/)
  * *CEO Crate Profits* by [u/_Caith_Amach](https://www.reddit.com/user/_Caith_Amach/)
  * *Import/Export Spreadsheet & High-End Sourcing* by [u/Beltontx101](https://www.reddit.com/user/Beltontx101/) & [u/RDS08](https://www.reddit.com/user/RDS08/)
  * *Gunrunning FAQ & Solo Sale Mechanics* by [u/L131](https://www.reddit.com/user/L131/)

### 2. Presentation & Architectural Inspiration
* **[roadmap.sh](https://roadmap.sh)** ([GitHub: nilbuild/developer-roadmap](https://github.com/nilbuild/developer-roadmap)) — The definitive community roadmap standard whose node-based visual layouts, interactive drawer breakdowns, and progress tracking inspired the presentation architecture of this app.
* **[React Flow / XYFlow](https://xyflow.com/)** — The customizable library powering the interactive graph canvas.

### 3. Modern DLC Meta Sources
* **The Contract (2021)**: Agency 201 Security Contracts curve, Dr. Dre Contract, Payphone Hits assassination bonuses.
* **The Criminal Enterprises (2022)**: Payout rebalances, private session business selling.
* **Los Santos Drug Wars (2022-2023)**: First Dose & Last Dose, Acid Lab (Brickade 6x6) production boost and single-bike sales, Daily Stash Houses, G's Cache, Street Dealers.
* **The Chop Shop (2023)**: Salvage Yard, Tow Truck passive safe tick rates, Weekly Robberies.
* **The Cluckin' Bell Farm Raid (2024)**: Vincent Effenburger, zero-cost $500,000 solo heist.
* **Bottom Dollar Bounties (2024)**: Bail Enforcement Office, staff bounty agents, wall safe deposits.

---

## 📄 License

MIT © [Gabriel Cruz](https://github.com/gabrielcruzg3)
