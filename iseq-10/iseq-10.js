function calc() {
    var x = document.querySelector("#x").value;
    var y = document.querySelector("#y").value;
    var z = document.querySelector("#z").value;
    if(x > y && x > z)
    document.querySelector("#result").innerHTML = '가장 큰 수: ' + x;
    else if(y > x && y > z)
    document.querySelector("#result").innerHTML = '가장 큰 수: ' + y;
    else
    document.querySelector("#result").innerHTML = '가장 큰 수: ' + z;
}