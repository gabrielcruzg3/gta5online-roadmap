export type NodeCategory =
  | 'milestone'
  | 'active_mission'
  | 'passive_vault'
  | 'business'
  | 'heist'
  | 'protip';

export type NodeStatus = 'todo' | 'in_progress' | 'completed' | 'skipped';

export interface GuideDetails {
  prerequisites?: string[];
  steps: string[];
  proTips: string[];
  redditLinks?: { title: string; url: string }[];
  payoutBreakdown?: { item: string; value: string }[];
}

export interface RoadmapNodeData extends Record<string, unknown> {
  id: string;
  title: string;
  subtitle: string;
  stage: number;
  stageTitle: string;
  category: NodeCategory;
  payout: string;
  cost: string;
  timeEstimate: string;
  soloFriendly: boolean;
  hourlyEquiv?: string;
  tags: string[];
  summary: string;
  details: GuideDetails;
}

export interface StageInfo {
  id: number;
  title: string;
  budgetRange: string;
  description: string;
  accentColor: string;
}

export interface CooldownTimer {
  id: string;
  label: string;
  durationSeconds: number;
  remainingSeconds: number;
  isRunning: boolean;
  category: 'game_clock' | 'cooldown' | 'passive';
  description: string;
}
