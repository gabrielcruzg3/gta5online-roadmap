# Design System & UX Tenets: `gta5online-roadmap`

## 1. Visual Philosophy & HUD Aesthetic

`gta5online-roadmap` fuses **roadmap.sh's clean educational node hierarchy** with **GTA V's high-contrast crime syndicate HUD**.

### Core Tenets
1. **Dark Mode First**: Deep slate and obsidian backgrounds (`#020617`, `#0f172a`) prevent screen glare during long gaming sessions on a second monitor or tablet.
2. **High-Contrast Currency Accents**:
   * **GTA Green (`#10b981`, `#22c55e`)**: High-payout yields, completed nodes, and direct cash generation.
   * **Syndicate Gold (`#f59e0b`, `#eab308`)**: Core milestones, business setups, and in-progress tasks.
   * **Radar Cyan (`#06b6d4`, `#0891b2`)**: Cooldown timers, clocks, and telemetry.
   * **Vault Purple (`#a855f7`)**: Wall safes and Nightclub warehouse passive accumulation.
   * **Heist Rose (`#f43f5e`)**: Major end-game heists (Cayo Perico, Casino, Doomsday).
3. **No Dead Ends / Clickable Everything**:
   * Every node can be inspected for an in-depth breakdown.
   * Status indicators give tactile visual feedback and update the master completion gauge.
4. **Second-Screen Friendly**:
   * Compact, readable fonts and bold typography legible from 3 feet away on a secondary monitor while gaming in borderless windowed mode.

---

## 2. Color Tokens

| Token | Class / Hex | Semantics |
| :--- | :--- | :--- |
| **Canvas Background** | `bg-slate-950` (`#020617`) | Main application and XYFlow canvas canvas backing |
| **Card Surface** | `bg-slate-900` (`#0f172a`) | Node cards, modals, and slide-over drawers |
| **Borders** | `border-slate-800` (`#1e293b`) | Structural separation and dividers |
| **Text Primary** | `text-slate-100` (`#f8fafc`) | Node headers and primary metrics |
| **Text Muted** | `text-slate-400` (`#94a3b8`) | Subtitles, descriptions, and metadata |
| **Cash Accent** | `text-emerald-400` (`#34d399`) | Payouts, earnings, and positive cash flow |
| **Alert Gold** | `text-amber-400` (`#fbbf24`) | In-progress milestones and pro-tips |

---

## 3. Typography & Hierarchy
* **UI Font**: System UI sans-serif (`font-sans`) optimized for legibility at high DPI.
* **Numbers & Money**: Monospaced tabular numerals (`font-mono`) ensuring financial values line up predictably.
