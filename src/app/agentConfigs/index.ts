import { dementiaCompanionScenario } from './dementiaCompanion';

import type { RealtimeAgent } from '@openai/agents/realtime';

// Map of scenario key -> array of RealtimeAgent objects
export const allAgentSets: Record<string, RealtimeAgent[]> = {
  dementiaCompanion: dementiaCompanionScenario,
};

export const defaultAgentSetKey = 'dementiaCompanion';
