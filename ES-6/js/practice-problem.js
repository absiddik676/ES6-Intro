// Arrow function
const gun = (a,b,c) => a * b * c;
const number = gun(10,10,10);
console.log(number);

// Multi line
const string = `
I am a web developer
I love to code
I love to eat biryani
`
console.log(string);

// default parameter
const sum = (num1,num2=10)=> num1 + num2;
const sumNumber = sum(10);
console.log(sumNumber);

// even name friend

const friends = ['Muzahid','Tayeb','Shakib','Fahim','Sayem','Rakibs'];
const checkEvenName = names =>{
    const evenName = [];
    for(const name of names){
        if(name.length  % 2 == 0){
            evenName.push(name)
        }
    }
    return evenName
} 
const evenNameFriend = checkEvenName(friends);;
console.log(evenNameFriend);

// some number square and sum squared number and return sums average

const myNumbers =  [10, 14, 25, 11, 44]
const squaresAndAverage = numbers =>{
    let sum = 0;
    for(const number of numbers){
        const square = Math.pow(number,2)
        sum += square
    }
    const average = sum / numbers.length;
    return average
}
const myAverageNumber = squaresAndAverage(myNumbers);
console.log(myAverageNumber);

// send 2 array in a arrow function and combined this 2 array and assing them new array and find max number

const firstArray = [120, 14, 22, 54];
const secondArray = [12,44,  78, 49, 77, 44]
const findMaxNumber = (first, second) =>{
    const newArray = [...first,...second]
    const maxNumber = Math.max(...newArray)
    return maxNumber
}
const myMaxNumber = findMaxNumber(firstArray,secondArray)
console.log(myMaxNumber);
