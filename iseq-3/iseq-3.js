function calc() {
    var x = document.querySelector("#x").value;
    var y = document.querySelector("#y").value;
    var remainder = x % y;
    x -= remainder;
    var division = x / y;
    document.querySelector("#result").innerHTML = "몫: " + division + '<br>나머지: ' + remainder;
}