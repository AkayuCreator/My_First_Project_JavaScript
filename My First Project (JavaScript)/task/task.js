// console.log('Prices:\nBubblegum: $2\nToffee: $0.2\nIce cream: $5\nMilk chocolate: $4\nDoughnut: $2.5\nPancake: $3.2');
const input = require('sync-input');

console.log('Earned amount:\nBubblegum: $202\nToffee: $118\nIce cream: $2250\nMilk chocolate: $1680\nDoughnut: $1075\nPancake: $80')
console.log();
console.log('Income: $5405.0');

let income = 5405;
let staff_exp = Number(input('Staff expenses:'));
let other_exp = Number(input('Other expenses:'));
let net_income = income - staff_exp - other_exp;

console.log(`Net income: $${net_income}`);