function calc() {
    var x = document.querySelector("#x").value;
    var y = document.querySelector("#y").value;
    if(x > y)
    document.querySelector("#result").innerHTML = '큰 수: ' + x;
    else
    document.querySelector("#result").innerHTML = '큰 수: ' + y;
}