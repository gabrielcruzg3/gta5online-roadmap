import { Node, Edge } from '@xyflow/react';
import { ROADMAP_NODES, STAGES } from './roadmap-nodes';
import { RoadmapNodeData, NodeStatus } from '../types/roadmap';

export interface CustomNodeData extends RoadmapNodeData {
  status: NodeStatus;
  onSelect: (node: RoadmapNodeData) => void;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
}

export function buildRoadmapGraph(
  statusMap: Record<string, NodeStatus>,
  onSelect: (node: RoadmapNodeData) => void,
  onStatusChange: (nodeId: string, status: NodeStatus) => void
): { nodes: Node<CustomNodeData>[]; edges: Edge[] } {
  const nodes: Node<CustomNodeData>[] = [];
  const edges: Edge[] = [];

  // Group nodes by stage
  const nodesByStage: Record<number, RoadmapNodeData[]> = {};
  STAGES.forEach((stage) => {
    nodesByStage[stage.id] = [];
  });
  ROADMAP_NODES.forEach((node) => {
    if (nodesByStage[node.stage]) {
      nodesByStage[node.stage].push(node);
    }
  });

  const NODE_WIDTH = 320;
  const NODE_HEIGHT = 160;
  const GAP_X = 60;
  const GAP_Y = 180;
  let currentY = 80;

  STAGES.forEach((stage) => {
    const stageNodes = nodesByStage[stage.id] || [];
    const count = stageNodes.length;
    if (count === 0) return;

    // Arrange nodes in rows of 2 or 3 for balanced roadmap.sh tree appearance
    const cols = count <= 2 ? count : count <= 4 ? 2 : 3;
    const totalWidth = cols * NODE_WIDTH + (cols - 1) * GAP_X;
    const startX = -(totalWidth / 2);

    stageNodes.forEach((nodeData, idx) => {
      const col = idx % cols;
      const row = Math.floor(idx / cols);

      const x = startX + col * (NODE_WIDTH + GAP_X);
      const y = currentY + row * GAP_Y;

      nodes.push({
        id: nodeData.id,
        type: 'roadmapNode',
        position: { x, y },
        data: {
          ...nodeData,
          status: statusMap[nodeData.id] || 'todo',
          onSelect,
          onStatusChange,
        },
      });
    });

    const rowsInStage = Math.ceil(count / cols);
    currentY += rowsInStage * GAP_Y + 120; // Stage gap
  });

  // Explicit logical connections representing progression
  const rawEdges: [string, string][] = [
    // Stage 1 connections
    ['starter-tutorial', 'treasure-hunts'],
    ['starter-tutorial', 'flight-school'],
    ['starter-tutorial', 'dax-first-dose'],

    // Stage 1 -> Stage 2
    ['treasure-hunts', 'unlock-vip'],
    ['unlock-vip', 'vip-wave'],
    ['unlock-vip', 'cluckin-bell'],
    ['treasure-hunts', 'high-end-apt'],
    ['vip-wave', 'daily-stash-house'],

    // Stage 2 -> Stage 3
    ['dax-first-dose', 'acid-lab'],
    ['daily-stash-house', 'acid-lab'],
    ['cluckin-bell', 'kosatka-sub'],
    ['kosatka-sub', 'cayo-perico-solo'],

    // Stage 3 -> Stage 4
    ['cayo-perico-solo', 'celebrity-agency'],
    ['celebrity-agency', 'payphone-hits'],
    ['celebrity-agency', 'agency-safe-boost'],
    ['celebrity-agency', 'dr-dre-contract'],
    ['cayo-perico-solo', 'auto-shop'],
    ['cayo-perico-solo', 'salvage-yard'],

    // Stage 4 -> Stage 5
    ['salvage-yard', 'nightclub-empire'],
    ['nightclub-empire', 'nightclub-safe-hack'],
    ['cayo-perico-solo', 'bunker-gunrunning'],
    ['bunker-gunrunning', 'mc-feeder-trio'],
    ['mc-feeder-trio', 'nightclub-empire'],
    ['cayo-perico-solo', 'arcade-mct'],
    ['celebrity-agency', 'bail-enforcement'],

    // Stage 5 -> Stage 6
    ['nightclub-empire', 'vault-circuit-loop'],
    ['agency-safe-boost', 'vault-circuit-loop'],
    ['salvage-yard', 'vault-circuit-loop'],
    ['arcade-mct', 'diamond-casino-heist'],
    ['cayo-perico-solo', 'cayo-hard-mode'],
    ['vault-circuit-loop', 'endgame-fleet'],
  ];

  rawEdges.forEach(([source, target], i) => {
    const isCompleted = statusMap[source] === 'completed';
    edges.push({
      id: `e-${source}-${target}-${i}`,
      source,
      target,
      type: 'smoothstep',
      animated: isCompleted,
      style: {
        stroke: isCompleted ? '#10b981' : '#475569',
        strokeWidth: isCompleted ? 2.5 : 2,
      },
    });
  });

  return { nodes, edges };
}
