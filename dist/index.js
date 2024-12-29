"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OptimizeSickCount_1 = __importDefault(require("./components/OptimizeSickCount"));
const Cip = Array.from({ length: 100000 }, (_, i) => i + 1);
const D = [50000, 100000, 150000];
const result = (0, OptimizeSickCount_1.default)(Cip, D);
console.log(result);
for (let i = 0; i < 10; i++) {
    console.log(Cip[i]);
}
