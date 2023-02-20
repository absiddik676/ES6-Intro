
// object Destructuring
const  fish =  {
    name: 'king Hilsa',
    home : 'chadpur',
    color : 'shilvr',
    price : '1200tk',
    phone : 175545522
}

const {name,price} = fish;
console.log(price);

// Array Destructuring

const [first, another] = [122,25];
console.log(first, another);

function nayok(){
    return  ['sakib', 'bappi']
}

const [king,lost] = nayok();
console.log(king);