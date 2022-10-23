function calc() {
    var x = document.querySelector("#x").value;
    var y = document.querySelector("#y").value;
    if(x + y >= 140)
    document.querySelector("#result").innerHTML = '합격';
    else
    document.querySelector("#result").innerHTML = '불합격';
}