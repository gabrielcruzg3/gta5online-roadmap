import React from 'react';
import {
  Search,
  RotateCcw,
  Clock,
  Compass,
  ListTree,
  Building2,
  Trophy,
  DollarSign,
  Sparkles,
  Layers,
  Wallet,
} from 'lucide-react';
import { NodeCategory } from '../../types/roadmap';

interface RoadmapHeaderProps {
  completedCount: number;
  totalCount: number;
  progressPercent: number;
  onReset: () => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  activeView: 'canvas' | 'list' | 'vault';
  onViewChange: (view: 'canvas' | 'list' | 'vault') => void;
  isRadarOpen: boolean;
  onToggleRadar: () => void;
}

export const RoadmapHeader: React.FC<RoadmapHeaderProps> = ({
  completedCount,
  totalCount,
  progressPercent,
  onReset,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  activeView,
  onViewChange,
  isRadarOpen,
  onToggleRadar,
}) => {
  const categories: { id: string; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Operations', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'milestone', label: 'Milestones', icon: <Compass className="w-3.5 h-3.5" /> },
    { id: 'active_mission', label: 'Active Missions', icon: <DollarSign className="w-3.5 h-3.5" /> },
    { id: 'passive_vault', label: 'Passive Safes', icon: <Building2 className="w-3.5 h-3.5" /> },
    { id: 'heist', label: 'Big Heists', icon: <Trophy className="w-3.5 h-3.5" /> },
    { id: 'protip', label: 'Pro Hacks', icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur-md sticky top-0 z-40 px-4 py-3">
      <div className="max-w-7xl mx-auto space-y-3">
        {/* Top Tier: Title, Progress, and Action Toggles */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-black text-slate-950 shadow-lg shadow-amber-500/20 text-lg">
              $
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-100 flex items-center gap-1.5">
                  GTA Online <span className="text-amber-400">Roadmap</span>
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  roadmap.sh style
                </span>
              </div>
              <p className="text-xs text-slate-400">
                The r/gtaonline Mega Guide & Modern Meta Progression
              </p>
            </div>
          </div>

          {/* Progress Bar & Actions */}
          <div className="flex items-center gap-3">
            {/* Progress Bar */}
            <div className="bg-slate-950/70 border border-slate-800 rounded-xl px-3 py-1.5 flex items-center gap-3 min-w-[200px]">
              <div className="flex-1">
                <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                  <span className="text-slate-400">Syndicate Progress</span>
                  <span className="text-emerald-400 font-mono">{progressPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-300 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-slate-300 shrink-0">
                {completedCount}/{totalCount}
              </span>
            </div>

            {/* View Switchers */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              <button
                onClick={() => onViewChange('canvas')}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                  activeView === 'canvas'
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Compass className="w-3.5 h-3.5" /> Visual Canvas
              </button>
              <button
                onClick={() => onViewChange('list')}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                  activeView === 'list'
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ListTree className="w-3.5 h-3.5" /> Guide List
              </button>
              <button
                onClick={() => onViewChange('vault')}
                className={`px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 transition-colors ${
                  activeView === 'vault'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'text-emerald-400 hover:text-emerald-300'
                }`}
              >
                <Wallet className="w-3.5 h-3.5" /> Vault Run
              </button>
            </div>

            {/* Cooldown Radar Toggle */}
            <button
              onClick={onToggleRadar}
              className={`px-3 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 transition-all ${
                isRadarOpen
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Cooldown Radar
            </button>

            {/* Reset Button */}
            <button
              onClick={onReset}
              title="Reset tracked progress"
              className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Tier: Search and Category Filter Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-2.5 py-1 rounded-lg font-medium flex items-center gap-1.5 shrink-0 transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-slate-700 text-slate-100 border border-slate-600 shadow-sm'
                    : 'bg-slate-950/70 text-slate-400 border border-slate-800 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter missions, safes, heists..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-8 pr-3 py-1 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/80 transition-colors"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
