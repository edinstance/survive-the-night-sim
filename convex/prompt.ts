import { query } from "./_generated/server";


export const getActivePrompt = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query("prompts").withIndex("by_active").collect();
    },
  });