var sumbitButton = document.getElementById("sumbit");

sumbitButton.addEventListener("click", output);

function output() {

    var questions = document.getElementById("question").value;

    var output = document.getElementById("output");

    var answers = ["no", "yes", "maybe",
"probably not", "probably", "high chance", "low chance"];

    var randNum = (Math.floor(Math.random() * answers.length));

    if(questions.length == 0) {
        output.style.color = "red";
        output.innerHTML = "Try again, please";
    }
    else {
        output.style.color = "maroon";
        output.innerHTML = answers[randNum];
    }

}
