function calc() {
    var x = document.querySelector("#x").value;
    if(x % 2 == 1)
    document.querySelector("#result").innerHTML = '홀수';
    else
    document.querySelector("#result").innerHTML = '짝수';
}