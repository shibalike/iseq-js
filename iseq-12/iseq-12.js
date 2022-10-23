function calc() {
    var x = document.querySelector(("#x")).value;
    var y = document.querySelector(("#y")).value;
    var z = document.querySelector(("#z")).value;
    var sum;
    sum = parseInt(x) + parseInt(y) + parseInt(z);
    var average = sum / 3;
    if(average >= 90)
    document.querySelector("#result").innerHTML = sum + ' ' + average + ' 수';  
    else if(average >= 80)
    document.querySelector("#result").innerHTML = sum + ' ' + average + ' 우';  
    else if(average >= 70)
    document.querySelector("#result").innerHTML = sum + ' ' + average + ' 미';  
    else if(average >= 60)
    document.querySelector("#result").innerHTML = sum + ' ' + average + ' 양';  
    else
    document.querySelector("#result").innerHTML = sum + ' ' + average + ' 가';  
}