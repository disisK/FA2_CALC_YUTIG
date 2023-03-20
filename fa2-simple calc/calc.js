function plus(){
    var one = parseFloat(document.getElementById("num1").value);
    var two = parseFloat(document.getElementById("num2").value);
    document.getElementById("footer").innerHTML = "The sum of " + one + " and " + two + " is " + (one+two) +".";
}
function minus(){
    var one = parseFloat(document.getElementById("num1").value);
    var two = parseFloat(document.getElementById("num2").value);
    document.getElementById("footer").innerHTML = "The difference of " + one + " and " + two + " is " + (one-two) +".";
}
function times(){
    var one = parseFloat(document.getElementById("num1").value);
    var two = parseFloat(document.getElementById("num2").value);
    document.getElementById("footer").innerHTML = "The product of " + one + " and " + two + " is " + (one*two) +".";
}
function divide(){
    var one = parseFloat(document.getElementById("num1").value);
    var two = parseFloat(document.getElementById("num2").value);
    document.getElementById("footer").innerHTML = "The quotient of " + one + " and " + two + " is " + (one/two) +".";
}
function percent(){
    var one = parseFloat(document.getElementById("num1").value);
    var two = parseFloat(document.getElementById("num2").value);
    document.getElementById("footer").innerHTML = "The remainder of " + one + " and " + two + " is " + (one%two) +".";
}