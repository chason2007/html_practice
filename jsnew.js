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