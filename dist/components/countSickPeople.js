"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CountSickPeople = (Cip, m) => {
    let result = [];
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < Cip.length; j++) {
            if (Cip[j] < m[i]) {
                result[i] += 1;
            }
        }
    }
    return result;
};
exports.default = CountSickPeople;
