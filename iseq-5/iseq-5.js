function calc() {
    var x = document.querySelector("#x").value;
    var area = x * x * 3.14; 
    var circum = 2 * 3.14 * x; 
    document.querySelector("#result").innerHTML = '원주: ' + circum + '<br>넓이: ' + area;
}