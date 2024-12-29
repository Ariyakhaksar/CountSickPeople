"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return low; // تعداد افرادی که دمای قابل تحمل‌شان کمتر از target هستند
}
exports.default = binarySearch;
