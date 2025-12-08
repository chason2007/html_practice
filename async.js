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
