import { z } from 'zod';
export declare const DecimalSchema: z.ZodUnion<[z.ZodNumber, z.ZodString, z.ZodObject<{
    d: z.ZodArray<z.ZodNumber, "many">;
    e: z.ZodNumber;
    s: z.ZodNumber;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    d: z.ZodArray<z.ZodNumber, "many">;
    e: z.ZodNumber;
    s: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    d: z.ZodArray<z.ZodNumber, "many">;
    e: z.ZodNumber;
    s: z.ZodNumber;
}, z.ZodTypeAny, "passthrough">>]>;
