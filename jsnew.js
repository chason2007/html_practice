// Demonstrate hoisting for `var`
var a = 10;
console.log(a); // 10

// ES6: let and const have temporal dead zone — declare before use
let b = 20;
console.log(b);
b = 130;
console.log(b);

{
    let b = 30;
    console.log(b);
}

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

// 4. Callback function and 5. IIFE (immediately invoked function expression)
(() => {
    console.log("Callback and iife f called");
})();
