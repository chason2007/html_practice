let form = document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let rating = document.getElementById("rating").value;
    let feedback = document.getElementById("fbBox").value;
    if(name === ""){
        alert("Please enter your name.");
        return;
    }
    if(feedback.length < 5){
        alert("Feedback must be at least 5 characters long.");
        return;
    }
    let result = document.querySelector("#result")
    result.innerHTML += `<h3>Thank you, ${name} for your feedback on ${course}:</h3>
    <p class="bb">Your feedback: ${feedback} </p>`;
    form.reset();
    alert("Form submitted!");
}