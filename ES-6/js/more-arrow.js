const  add = (a,b) => a + b;
const fullName = (fast  , second) => fast + second;

const name =  fullName('Abu bakar', ' siddik');
console.log(name);

// no parameter arrow function
const pi = () => 3.1416; 

// 2 type of one parameter arrow function
const doubleIt = (num) => num * 2;
// most use one parameter arrow function
const fiveTimes = num => num * 5;

// Multi line  arrow function 
const sum = (a,b,c) =>{
    const fastSum = a + b;
    const secondSum = b + c;
    const sum = fastSum + secondSum;
    return sum;
}