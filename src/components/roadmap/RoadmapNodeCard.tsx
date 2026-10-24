import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { CustomNodeData } from '../../data/graph-layout';
import { CheckCircle2, Clock, DollarSign, Sparkles, Building2, Trophy, ShieldAlert } from 'lucide-react';

export const RoadmapNodeCard: React.FC<{ data: CustomNodeData }> = ({ data }) => {
  const {
    title,
    subtitle,
    category,
    payout,
    status,
    stageTitle,
    tags,
    onSelect,
    onStatusChange,
  } = data;

  const isCompleted = status === 'completed';
  const isInProgress = status === 'in_progress';
  const isSkipped = status === 'skipped';

  const getCategoryIcon = () => {
    switch (category) {
      case 'passive_vault':
        return <Building2 className="w-3.5 h-3.5 text-purple-400" />;
      case 'heist':
        return <Trophy className="w-3.5 h-3.5 text-rose-400" />;
      case 'active_mission':
        return <DollarSign className="w-3.5 h-3.5 text-emerald-400" />;
      case 'protip':
        return <Sparkles className="w-3.5 h-3.5 text-cyan-400" />;
      case 'business':
        return <Building2 className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  const getBorderColor = () => {
    if (isCompleted) return 'border-emerald-500/80 shadow-emerald-500/20';
    if (isInProgress) return 'border-amber-500/80 shadow-amber-500/20';
    if (isSkipped) return 'border-slate-800 opacity-60';
    switch (category) {
      case 'passive_vault':
        return 'border-purple-500/40 hover:border-purple-400';
      case 'heist':
        return 'border-rose-500/40 hover:border-rose-400';
      case 'active_mission':
        return 'border-emerald-500/40 hover:border-emerald-400';
      case 'business':
        return 'border-amber-500/40 hover:border-amber-400';
      default:
        return 'border-slate-700 hover:border-slate-500';
    }
  };

  return (
    <div
      onClick={() => onSelect(data)}
      className={`group relative w-[310px] rounded-xl border bg-slate-900/95 p-3.5 shadow-lg backdrop-blur-md transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-2xl ${getBorderColor()}`}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="!bg-amber-400 !border-slate-950 !w-2.5 !h-2.5"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="!bg-amber-400 !border-slate-950 !w-2.5 !h-2.5"
      />

      {/* Top Header */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 overflow-hidden">
          {getCategoryIcon()}
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">
            {stageTitle}
          </span>
        </div>

        {/* Status Pill */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            const nextStatus = isCompleted ? 'todo' : isInProgress ? 'completed' : 'in_progress';
            onStatusChange(data.id, nextStatus);
          }}
          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full flex items-center gap-1 transition-colors ${
            isCompleted
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : isInProgress
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse'
              : isSkipped
              ? 'bg-slate-800 text-slate-500 border border-slate-700'
              : 'bg-slate-800/80 text-slate-400 border border-slate-700/60 hover:text-slate-200'
          }`}
        >
          {isCompleted ? '✓ Done' : isInProgress ? 'In Progress' : 'To Do'}
        </button>
      </div>

      {/* Title & Subtitle */}
      <h3 className="font-bold text-sm text-slate-100 group-hover:text-amber-400 transition-colors line-clamp-1">
        {title}
      </h3>
      <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-snug">
        {subtitle}
      </p>

      {/* Payout & Tags Footer */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
        <div className="font-mono font-black text-emerald-400 text-xs">
          {payout}
        </div>
        <div className="flex items-center gap-1">
          {tags.slice(0, 1).map((tag, i) => (
            <span
              key={i}
              className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
