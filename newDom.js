let form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let name = document.querySelectorAll("input")[0].value;
    let feedback = document.querySelectorAll("input")[1].value;
    if(name === ""){
        console.log("Please fill all fields");
        return;
    }
    if(feedback.length<5){
        console.log("Feedback must be at least 5 characters");
        return;
    }
    console.log("Name: " + name);
    console.log("Feedback: " + feedback);

    let result = document.createElement("p");
    result.textContent = "Thank you " + name + " for your feedback!";
    document.body.appendChild(result);
})