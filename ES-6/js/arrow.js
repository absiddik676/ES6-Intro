// Function declaration 
function add(a,b) {
    const total  = a+b;
    return total;
} 

// Function expression
const add1 = function(a,b){
    const total  = a+ b;
    return total
}

// Arrow function expression
const add4 = (a,b) => {
    return a + b;
}

// Arrow function
const  add3 = (a,b)=>a + b;
console.log(add3(12,12));