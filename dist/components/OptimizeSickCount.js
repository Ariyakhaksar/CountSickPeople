"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const binarySearch_1 = __importDefault(require("./binarySearch"));
const OptimizeSickCount = (Cip, D) => {
    const n = Cip.length;
    const m = D.length;
    Cip.sort((a, b) => a - b);
    let result = [];
    // برای هر روز
    for (let i = 0; i < m; i++) {
        // برای هر روز، تعداد افراد بیمار را با جستجوی دودویی پیدا می‌کنیم
        const dayTemperature = D[i];
        // پیدا کردن تعداد افرادی که دمای قابل تحمل‌شان کمتر از دمای هوا است
        const sickCount = (0, binarySearch_1.default)(Cip, dayTemperature);
        result.push(sickCount);
    }
    return result;
};
exports.default = OptimizeSickCount;
