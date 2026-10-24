import React from 'react';
import { STAGES, ROADMAP_NODES } from '../../data/roadmap-nodes';
import { RoadmapNodeData, NodeStatus } from '../../types/roadmap';
import { CheckCircle2, Clock, DollarSign, ChevronRight, UserCheck, Layers } from 'lucide-react';

interface ListViewProps {
  statusMap: Record<string, NodeStatus>;
  onSelectNode: (node: RoadmapNodeData) => void;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
  selectedCategory: string;
  searchQuery: string;
}

export const ListView: React.FC<ListViewProps> = ({
  statusMap,
  onSelectNode,
  onStatusChange,
  selectedCategory,
  searchQuery,
}) => {
  return (
    <div className="max-w-5xl mx-auto py-6 px-4 space-y-8">
      {STAGES.map((stage) => {
        const stageNodes = ROADMAP_NODES.filter((n) => n.stage === stage.id).filter((n) => {
          const matchCategory = selectedCategory === 'all' || n.category === selectedCategory;
          const matchSearch =
            searchQuery === '' ||
            n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            n.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
            n.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
          return matchCategory && matchSearch;
        });

        if (stageNodes.length === 0) return null;

        const stageCompleted = stageNodes.filter((n) => statusMap[n.id] === 'completed').length;

        return (
          <div key={stage.id} className="space-y-3">
            {/* Stage Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: stage.accentColor }}
                  ></span>
                  <h2 className="text-lg font-black text-slate-100">{stage.title}</h2>
                  <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {stage.budgetRange}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">{stage.description}</p>
              </div>

              <div className="text-xs font-mono text-slate-400">
                {stageCompleted} / {stageNodes.length} Completed
              </div>
            </div>

            {/* Stage Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {stageNodes.map((node) => {
                const status = statusMap[node.id] || 'todo';
                const isCompleted = status === 'completed';
                const isInProgress = status === 'in_progress';

                return (
                  <div
                    key={node.id}
                    onClick={() => onSelectNode(node)}
                    className={`p-4 rounded-xl border bg-slate-900/80 hover:bg-slate-900 transition-all cursor-pointer flex flex-col justify-between ${
                      isCompleted
                        ? 'border-emerald-500/60 bg-emerald-950/10'
                        : isInProgress
                        ? 'border-amber-500/60 bg-amber-950/10'
                        : 'border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {node.category.replace('_', ' ')}
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const next = isCompleted
                              ? 'todo'
                              : isInProgress
                              ? 'completed'
                              : 'in_progress';
                            onStatusChange(node.id, next);
                          }}
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full transition-colors ${
                            isCompleted
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : isInProgress
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : 'bg-slate-800 text-slate-400 border border-slate-700'
                          }`}
                        >
                          {isCompleted ? '✓ Done' : isInProgress ? 'In Progress' : 'To Do'}
                        </button>
                      </div>

                      <h3 className="font-bold text-sm text-slate-100 group-hover:text-amber-400">
                        {node.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {node.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <div className="font-mono font-bold text-emerald-400 text-xs">
                        {node.payout}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 text-[11px]">
                        <span>{node.timeEstimate}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
