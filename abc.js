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
}}();