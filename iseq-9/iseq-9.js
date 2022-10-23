function calc() {
    var x = document.querySelector("#x").value;
    var sum = 0;
    for(var i = 3; i < x; i+=3)
    sum += i;
    document.querySelector("#result").innerHTML = '합: ' + sum;
}