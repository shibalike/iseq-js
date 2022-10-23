function calc() {
    var x = document.querySelector("#x").value;
    var y = document.querySelector("#y").value;
    var triangle = x * y / 2;
    var rectangle = x * y;
    document.querySelector("#result").innerHTML = '삼각형: ' + triangle + '<br>사각형: ' + rectangle;
}