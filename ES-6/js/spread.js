const max = Math.max(122,25,11,45,455);
// console.log(max);
const number = [122,25,11,45,455];
const largest = Math.max(...number)
// console.log(...number);
// console.log(largest);

const number2 =  [...number];
number2.push(555)
console.log(number2); 
console.log(number);
const newArray =  [12,25,54,...number,15,25]
console.log(newArray);