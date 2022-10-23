function calc() {
    var x = document.querySelector("#x").value;
    var months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if(x > 12)
        document.querySelector("#result").innerHTML = '99'
    else
        document.querySelector("#result").innerHTML = x + ' - ' + months[x];
}