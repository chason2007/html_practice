setTimeout(() => {
  console.log("SetTimeout fn.");
}, 0);

//callback hell
setTimeout(() => {
  console.log("SetTimeout fn 1.");
  setTimeout(() => {
    console.log("SetTimeout fn 2.");
    setTimeout(() => {
      console.log("SetTimeout fn 3.");
      setTimeout(() => {
        console.log("SetTimeout fn 4.");
        setTimeout(() => {
          console.log("SetTimeout fn 5.");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

//Promise states: pending, fulfilled, rejected

let myPromise = new Promise((res, rej) => {
    let marks = 80;
    if (marks >= 60) {
        res("Student passed the exam.");
    } else {
        rej("Student failed the exam.");
    }
});

//calling a promise
//1. .then() and .catch()
myPromise
    .then((a) => {
        console.log(a);
    })
    .catch((err) => {
        console.log(err);
    });

//2. async/await
//no error handling
let handlePromise = async () => {
    try{
        let response = await myPromise;
        console.log(response);
        console.log("anything");
    } catch(err){
        console.log(err);
    }
}
handlePromise();