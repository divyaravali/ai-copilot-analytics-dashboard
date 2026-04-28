export const kpis = {
  totalSessions: 12480,
  totalPrompts: 43820,
  successRate: 94.7,
  avgLatency: 1.8,
  estimatedCost: 382.45,
};

export const usageTrend = [
  { date: "Apr 1", sessions: 120, prompts: 430 },
  { date: "Apr 2", sessions: 148, prompts: 510 },
  { date: "Apr 3", sessions: 132, prompts: 480 },
  { date: "Apr 4", sessions: 170, prompts: 620 },
  { date: "Apr 5", sessions: 190, prompts: 710 },
  { date: "Apr 6", sessions: 165, prompts: 590 },
  { date: "Apr 7", sessions: 210, prompts: 780 },
];

export const statusData = [
  { name: "Success", y: 9470 },
  { name: "Failed", y: 410 },
  { name: "Timeout", y: 120 },
];

export const intentData = [
  { intent: "Code Generation", count: 420 },
  { intent: "Summarization", count: 360 },
  { intent: "Search", count: 280 },
  { intent: "Debugging", count: 240 },
  { intent: "Writing Help", count: 190 },
];