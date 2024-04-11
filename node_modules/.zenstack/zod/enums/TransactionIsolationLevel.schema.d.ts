import { z } from 'zod';
export declare const TransactionIsolationLevelSchema: z.ZodEnum<["ReadUncommitted", "ReadCommitted", "RepeatableRead", "Serializable"]>;
