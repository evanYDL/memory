import { RealtimeAgent, tool } from '@openai/agents/realtime';

export const getCurrentDateTime = tool({
  name: 'getCurrentDateTime',
  description:
    'Returns the current date and time in a friendly format to help orient the user.',
  parameters: {
    type: 'object',
    properties: {},
    required: [],
    additionalProperties: false,
  },
  execute: async () => {
    const now = new Date().toLocaleString('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    });
    return { datetime: now };
  },
});

export const connectToFamily = tool({
  name: 'connectToFamily',
  description:
    'Pretend to connect the user to a family member by name and return a confirmation message.',
  parameters: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: "Name of the family member to connect to",
      },
    },
    required: ['name'],
    additionalProperties: false,
  },
  execute: async (input: any) => {
    const { name } = input as { name: string };
    return { message: `Connecting you to ${name} now.` };
  },
});

export const getFamilyUpdate = tool({
  name: 'getFamilyUpdate',
  description:
    'Provides a short update about what family members, especially the grandkids, are doing.',
  parameters: {
    type: 'object',
    properties: {},
    required: [],
    additionalProperties: false,
  },
  execute: async () => {
    return {
      update:
        'Your granddaughter Emily is studying biology in college and your grandson Jacob just started high school and loves playing soccer.',
    };
  },
});

export const dementiaCompanionAgent = new RealtimeAgent({
  name: 'dementiaCompanion',
  voice: 'nova',
  instructions: `You are a friendly voice companion helping someone living with dementia.
Speak slowly, clearly, and warmly.
Gently remind them of the current date and time and provide simple orientation cues.
Encourage connection with loved ones and offer to connect them using the connectToFamily tool.
If they ask what their family is doing, use the getFamilyUpdate tool to share short updates.
Keep responses short and positive.`,
  tools: [getCurrentDateTime, connectToFamily, getFamilyUpdate],
  handoffs: [],
  handoffDescription: 'Supportive companion that keeps the user oriented and connected to family.',
});

export const dementiaCompanionScenario = [dementiaCompanionAgent];
