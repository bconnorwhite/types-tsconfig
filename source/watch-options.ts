import { z } from "zod";

const watchFileKindSchema = z.union([
  z.literal("FixedPollingInterval"),
  z.literal("PriorityPollingInterval"),
  z.literal("DynamicPriorityPolling"),
  z.literal("FixedChunkSizePolling"),
  z.literal("UseFsEvents"),
  z.literal("UseFsEventsOnParentDirectory")
]);

const watchDirectoryKindSchema = z.union([
  z.literal("UseFsEvents"),
  z.literal("FixedPollingInterval"),
  z.literal("DynamicPriorityPolling"),
  z.literal("FixedChunkSizePolling")
]);

const pollingWatchKindSchema = z.union([
  z.literal("FixedInterval"),
  z.literal("PriorityInterval"),
  z.literal("DynamicPriority"),
  z.literal("FixedChunkSize")
]);

export const watchOptionsSchema = z.object({
  watchFile: watchFileKindSchema.optional(),
  watchDirectory: watchDirectoryKindSchema.optional(),
  fallbackPolling: pollingWatchKindSchema.optional(),
  synchronousWatchDirectory: z.boolean().optional(),
  excludeDirectories: z.array(z.string()).optional(),
  excludeFiles: z.array(z.string()).optional()
});
