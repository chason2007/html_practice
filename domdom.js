var aw = {
    name: "Amrit",
    b: 20,
};

console.log(this);
var funf = function(aa,jk){
    console.log(this.name, aa, jk);
}
//funf(300);

//call apply bind
//bind
let boundedfn = funf.bind(Obj, 500, "kl");
boundedfn();
//return a new function
//call
funf.call(obj, 400, 900);
//it will immediately and the arguments we want to pass

//apply
funf.apply(obj, [600, 900]);