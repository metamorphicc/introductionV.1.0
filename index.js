
const number = 1234567.89;

const us = new Intl.NumberFormat("en-US").format(number);
const de = new Intl.NumberFormat("de-DE").format(number);
const jp = new Intl.NumberFormat("ja-JP").format(number);

console.log(us); // 1,234,567.89
console.log(de); // 1.234.567,89
console.log(jp); // 1,234,568
