function calc() {
    var x = document.querySelector("#x").value;
    var y = document.querySelector("#y").value;
    var add = parseInt(x) + parseInt(y);
    var min = parseInt(x) - parseInt(y);
    var mul = parseInt(x) * parseInt(y);
    var div = parseInt(x) / parseInt(y);
    document.querySelector("#result").innerHTML = '덧셈: ' + add + '<br>뺄셈: ' + min + '<br>나눗셈: ' + mul + '<br>곱셈: ' + div;
}