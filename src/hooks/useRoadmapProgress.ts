import { useState, useEffect, useCallback } from 'react';
import { NodeStatus } from '../types/roadmap';
import { ROADMAP_NODES } from '../data/roadmap-nodes';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'gta_roadmap_progress_v1';

export function useRoadmapProgress() {
  const [statusMap, setStatusMap] = useState<Record<string, NodeStatus>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(statusMap));
    } catch (err) {
      console.warn('Failed to save progress to localStorage', err);
    }
  }, [statusMap]);

  const updateStatus = useCallback((nodeId: string, status: NodeStatus) => {
    setStatusMap((prev) => {
      const next = { ...prev, [nodeId]: status };
      if (status === 'completed') {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#f59e0b', '#10b981', '#06b6d4'],
        });
      }
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    if (window.confirm('Are you sure you want to reset all tracked roadmap progress?')) {
      setStatusMap({});
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (err) {
        console.warn('Failed to clear progress', err);
      }
    }
  }, []);

  const totalCount = ROADMAP_NODES.length;
  const completedCount = Object.values(statusMap).filter((s) => s === 'completed').length;
  const inProgressCount = Object.values(statusMap).filter((s) => s === 'in_progress').length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return {
    statusMap,
    updateStatus,
    resetProgress,
    totalCount,
    completedCount,
    inProgressCount,
    progressPercent,
  };
}
