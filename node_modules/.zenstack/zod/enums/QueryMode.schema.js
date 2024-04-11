"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryModeSchema = void 0;
/* eslint-disable */
const zod_1 = require("zod");
exports.QueryModeSchema = zod_1.z.enum(["default", "insensitive"]);
