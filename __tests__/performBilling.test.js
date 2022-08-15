const performBilling = require('../functions/performBilling');
var codesScannedTest1 = ['atv', 'atv', 'atv','vga']
var codesScannedTest2 = ['atv', 'ipd', 'ipd', 'atv', 'ipd', 'ipd', 'ipd'];
var codesScannedTest3 = ['mbp', 'vga', 'ipd']
var codesScannedTest4 = ['mbp', 'vga', 'ipd', 'cool']
var codesScannedTest5 = ['']

test("isInteger passes for integer value", () => {
    expect(performBilling(codesScannedTest1)).toBe(249.00);
});

test("isInteger passes for integer value", () => {
    expect(performBilling(codesScannedTest2)).toBe(2718.95);
});

test("isInteger passes for integer value", () => {
    expect(performBilling(codesScannedTest3)).toBe(1949.98);
});

test("isInteger passes for integer value", () => {
    expect(performBilling(codesScannedTest4)).toBe(false);
});

test("isInteger passes for integer value", () => {
    expect(performBilling(codesScannedTest5)).toBe(false);
});