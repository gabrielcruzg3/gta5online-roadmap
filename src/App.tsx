import React, { useState } from 'react';
import { useRoadmapProgress } from './hooks/useRoadmapProgress';
import { RoadmapHeader } from './components/roadmap/RoadmapHeader';
import { RoadmapCanvas } from './components/roadmap/RoadmapCanvas';
import { ListView } from './components/roadmap/ListView';
import { NodeDrawer } from './components/roadmap/NodeDrawer';
import { CooldownRadar } from './components/timers/CooldownRadar';
import { VaultCircuitModal } from './components/vault/VaultCircuitModal';
import { RoadmapNodeData } from './types/roadmap';

export const App: React.FC = () => {
  const {
    statusMap,
    updateStatus,
    resetProgress,
    totalCount,
    completedCount,
    progressPercent,
  } = useRoadmapProgress();

  const [activeView, setActiveView] = useState<'canvas' | 'list' | 'vault'>('canvas');
  const [selectedNode, setSelectedNode] = useState<RoadmapNodeData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isRadarOpen, setIsRadarOpen] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Sticky Header */}
      <RoadmapHeader
        completedCount={completedCount}
        totalCount={totalCount}
        progressPercent={progressPercent}
        onReset={resetProgress}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeView={activeView}
        onViewChange={setActiveView}
        isRadarOpen={isRadarOpen}
        onToggleRadar={() => setIsRadarOpen(!isRadarOpen)}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        {activeView === 'canvas' && (
          <RoadmapCanvas
            statusMap={statusMap}
            onSelectNode={setSelectedNode}
            onStatusChange={updateStatus}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        )}

        {activeView === 'list' && (
          <ListView
            statusMap={statusMap}
            onSelectNode={setSelectedNode}
            onStatusChange={updateStatus}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        )}

        {activeView === 'vault' && (
          <VaultCircuitModal onClose={() => setActiveView('canvas')} />
        )}
      </main>

      {/* Slide-over Node Detail Drawer */}
      <NodeDrawer
        node={selectedNode}
        status={selectedNode ? statusMap[selectedNode.id] || 'todo' : 'todo'}
        onClose={() => setSelectedNode(null)}
        onStatusChange={updateStatus}
      />

      {/* Floating Cooldown Radar */}
      <CooldownRadar
        isOpen={isRadarOpen}
        onClose={() => setIsRadarOpen(false)}
      />
    </div>
  );
};

export default App;
