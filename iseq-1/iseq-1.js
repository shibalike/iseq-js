function calc() {
    var x = document.querySelector("#x").value;
    var y = document.querySelector("#y").value;
    var total = parseInt(x) + parseInt(y);
    document.querySelector("#result").innerHTML = "결과: <br>" + total;
}