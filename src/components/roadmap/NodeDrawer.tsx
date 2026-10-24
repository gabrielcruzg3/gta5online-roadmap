import React, { useEffect } from 'react';
import { RoadmapNodeData, NodeStatus } from '../../types/roadmap';
import {
  X,
  CheckCircle2,
  Clock,
  DollarSign,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  UserCheck,
  Layers,
  Award,
} from 'lucide-react';

interface NodeDrawerProps {
  node: RoadmapNodeData | null;
  status: NodeStatus;
  onClose: () => void;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
}

export const NodeDrawer: React.FC<NodeDrawerProps> = ({
  node,
  status,
  onClose,
  onStatusChange,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!node) return null;

  const isCompleted = status === 'completed';
  const isInProgress = status === 'in_progress';
  const isSkipped = status === 'skipped';

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-xl h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col overflow-hidden text-slate-100 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                {node.stageTitle}
              </span>
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {node.category.replace('_', ' ')}
              </span>
            </div>
            <h2 className="text-xl font-black text-slate-100">{node.title}</h2>
            <p className="text-xs text-slate-400 mt-0.5">{node.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Switcher Bar */}
        <div className="px-5 py-3 bg-slate-950/40 border-b border-slate-800 flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Mark Milestone:
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onStatusChange(node.id, 'todo')}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                status === 'todo'
                  ? 'bg-slate-700 text-white'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              To Do
            </button>
            <button
              onClick={() => onStatusChange(node.id, 'in_progress')}
              className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                isInProgress
                  ? 'bg-amber-500 text-black'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => onStatusChange(node.id, 'completed')}
              className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1 transition-colors ${
                isCompleted
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-slate-800/60 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" /> Done
            </button>
            <button
              onClick={() => onStatusChange(node.id, 'skipped')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors ${
                isSkipped
                  ? 'bg-slate-600 text-white'
                  : 'bg-slate-800/60 text-slate-500 hover:bg-slate-800 hover:text-slate-300'
              }`}
            >
              Skip
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5">
          {/* Stats Matrix Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-slate-950/70 border border-slate-800 p-2.5 rounded-xl text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Payout</span>
              <div className="text-sm font-black text-emerald-400 font-mono mt-0.5 truncate">
                {node.payout}
              </div>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 p-2.5 rounded-xl text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Cost / Fee</span>
              <div className="text-sm font-bold text-amber-400 font-mono mt-0.5 truncate">
                {node.cost}
              </div>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 p-2.5 rounded-xl text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Time</span>
              <div className="text-sm font-bold text-slate-200 mt-0.5 truncate">
                {node.timeEstimate}
              </div>
            </div>
            <div className="bg-slate-950/70 border border-slate-800 p-2.5 rounded-xl text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Solo?</span>
              <div className="text-sm font-bold text-cyan-400 mt-0.5 flex items-center justify-center gap-1">
                {node.soloFriendly ? (
                  <>
                    <UserCheck className="w-3.5 h-3.5" /> 100% Solo
                  </>
                ) : (
                  <>
                    <Layers className="w-3.5 h-3.5" /> Co-Op
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Hourly Equiv Banner */}
          {node.hourlyEquiv && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase">Efficiency Rate</span>
              <span className="text-sm font-black font-mono text-emerald-300">
                {node.hourlyEquiv}
              </span>
            </div>
          )}

          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" /> Operational Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/80">
              {node.summary}
            </p>
          </div>

          {/* Prerequisites */}
          {node.details.prerequisites && node.details.prerequisites.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" /> Prerequisites & Unlocks
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {node.details.prerequisites.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-950/30 p-2 rounded-lg border border-slate-800/60">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Step-by-Step Instructions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Step-by-Step Execution
            </h4>
            <div className="space-y-2">
              {node.details.steps.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-slate-950/50 rounded-xl border border-slate-800/80 text-xs text-slate-300"
                >
                  <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {idx + 1}
                  </span>
                  <div className="flex-1 leading-relaxed">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pro-Tips & Meta Tricks */}
          {node.details.proTips.length > 0 && (
            <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Pro-Tips & Speedrun Hacks
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {node.details.proTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">⚡</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reddit Mega Guide Citations & Links */}
          {node.details.redditLinks && node.details.redditLinks.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                <ExternalLink className="w-4 h-4 text-orange-400" /> Reddit Mega Guide References
              </h4>
              <div className="space-y-1.5">
                {node.details.redditLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 hover:border-orange-500/50 text-xs text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <span className="truncate">{link.title}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
