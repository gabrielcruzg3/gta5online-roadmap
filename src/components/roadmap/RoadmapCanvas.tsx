import React, { useMemo, useEffect } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
} from '@xyflow/react';
import { RoadmapNodeCard } from './RoadmapNodeCard';
import { buildRoadmapGraph, CustomNodeData } from '../../data/graph-layout';
import { RoadmapNodeData, NodeStatus } from '../../types/roadmap';

interface RoadmapCanvasProps {
  statusMap: Record<string, NodeStatus>;
  onSelectNode: (node: RoadmapNodeData) => void;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
  selectedCategory: string;
  searchQuery: string;
}

const nodeTypes = {
  roadmapNode: RoadmapNodeCard,
};

export const RoadmapCanvas: React.FC<RoadmapCanvasProps> = ({
  statusMap,
  onSelectNode,
  onStatusChange,
  selectedCategory,
  searchQuery,
}) => {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => {
    return buildRoadmapGraph(statusMap, onSelectNode, onStatusChange);
  }, [statusMap, onSelectNode, onStatusChange]);

  // Filter nodes based on category & search query
  const filteredNodes = useMemo(() => {
    return initialNodes.map((node) => {
      const matchCategory = selectedCategory === 'all' || node.data.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        node.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.data.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.data.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const isVisible = matchCategory && matchSearch;

      return {
        ...node,
        style: {
          opacity: isVisible ? 1 : 0.2,
          filter: isVisible ? 'none' : 'grayscale(90%)',
          pointerEvents: (isVisible ? 'all' : 'none') as React.CSSProperties['pointerEvents'],
        },
      };
    });
  }, [initialNodes, selectedCategory, searchQuery]);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node<CustomNodeData>>(filteredNodes);
  const [edges, , onEdgesChange] = useEdgesState<Edge>(initialEdges);

  useEffect(() => {
    setNodes(filteredNodes);
  }, [filteredNodes, setNodes]);

  return (
    <div className="w-full h-[calc(100vh-125px)] min-h-[550px] relative bg-slate-950">
      <ReactFlow<Node<CustomNodeData>, Edge>
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        minZoom={0.15}
        maxZoom={1.6}
        defaultViewport={{ x: 0, y: 0, zoom: 0.65 }}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#1e293b" gap={24} size={1.5} />
        <Controls position="bottom-left" showInteractive={false} />
        <MiniMap
          position="bottom-right"
          nodeColor={(node) => {
            const status = statusMap[node.id];
            if (status === 'completed') return '#10b981';
            if (status === 'in_progress') return '#f59e0b';
            return '#334155';
          }}
          maskColor="rgba(2, 6, 23, 0.7)"
        />
      </ReactFlow>
    </div>
  );
};
