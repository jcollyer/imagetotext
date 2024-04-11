"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalSchema = void 0;
const zod_1 = require("zod");
exports.DecimalSchema = zod_1.z.union([zod_1.z.number(), zod_1.z.string(), zod_1.z.object({ d: zod_1.z.number().array(), e: zod_1.z.number(), s: zod_1.z.number() }).passthrough()]);
