const performBilling  = require('./functions/performBilling');
// var codesScanned = ['atv', 'ipd', 'ipd', 'atv', 'ipd', 'ipd', 'ipd'];
// var codesScanned = ['mbp', 'vga', 'ipd']
var codesScanned = ['atv', 'atv', 'atv','vga'];
const totalPrice = performBilling(codesScanned);

console.log(totalPrice);