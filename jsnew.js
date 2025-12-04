console.log(a);
//hoisting
var a= 10;
//global scope / function scope
console.log(a);

//es6
//let and const
console.log(b);
//reference error
//temporal dead zone
let b = 20;
b=130;
console.log(b);

{
    let b=30;
    console.log(b);
}

console.log(c);
const c = 40;
console.log(c);

//functions
//1. Named functions:
function NamedFunction(){
    console.log("Named fn called");
    console.log("Named fn called");
    console.log("Named fn called");
}

NamedFunction();

//2. Function expression
let funcExp = function(){
    console.log("Function expression called");
};

funcExp();

//3. Arrow functions
let arrow = () =>{
    console.log("Arrow function called");
};

arrow();

//4. Callback function and 5. IIFE (immediately invoked function expression)
{()=>{
    console.log("Callback and iife f called");
}}();
