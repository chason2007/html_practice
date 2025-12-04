function namedFunction(){
    console.log("Named fn.");
    console.log("Named fn.");
    console.log("Named fn.");
}
namedFunction();

let funcExp = function(){
    console.log("Fn. expression");
};
funcExp();

let arrow = () =>{
    console.log("Arrow fn.");
};
arrow();

{()=>{
    console.log("Callback and IIFE fn.");
}};

const add = (parameter1, parameter2) => {
    let num1 = parameter1 || 10;
    let num2 = parameter2 || 20;
    let sum = num1+num2;
    console.log("The sum is: ", sum);
    console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}
add(20, 50);

const product = (parameter1, parameter2) => {
    let num1 = parameter1 || 10;
    let num2 = parameter2 || 20;
    let product = num1*num2;
    console.log("The product is: ", product);
}
product(20, 50);

const mod = (parameter1, parameter2) => {
    let num1 = parameter1 || 10;
    let num2 = parameter2 || 20;
    let answer = num1%num2;
    console.log("The product is: ", answer);
}
mod(20, 50);

const div = (parameter1, parameter2) => {
    let num1 = parameter1 || 10;
    let num2 = parameter2 || 20;
    let ans = num1/num2;
    console.log("The product is: ", ans);
}
div(20, 50);

let a;
console.log(typeof(a))

let arr = [1,2,3,4,5,6];

//for loop
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//forEach
arr.forEach((element, index)=>{
    console.log(element, index);
});

//map
arr.map((el, ind)=>{
    console.log(el, ind);
});