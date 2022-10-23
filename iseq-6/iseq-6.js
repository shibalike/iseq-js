function calc() {
    var x = document.querySelector("#x").value;
    var height = x * 4 / 3;
    document.querySelector("#result").innerHTML = '세로: ' + height;
}