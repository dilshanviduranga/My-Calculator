let operator='+';
let number1;
let number2;
let output;


function add1(){
    document.getElementById("txtfield").value += 1;
}
function add2(){
    document.getElementById("txtfield").value += 2;
}
function add3(){
    document.getElementById("txtfield").value += 3;
}
function add4(){
    document.getElementById("txtfield").value += 4;
}
function add5(){
    document.getElementById("txtfield").value += 5;
}
function add6(){
    document.getElementById("txtfield").value += 6;
}
function add7(){
    document.getElementById("txtfield").value += 7;
}
function add8(){
    document.getElementById("txtfield").value += 8;
}
function add9(){
    document.getElementById("txtfield").value += 9;
}
function addMultiplication(){
    operator = '*';
    number1 = document.getElementById("txtfield").value;
    document.getElementById("txtfield").value = null;
}
function addMinus(){
    operator = '-';
    number1 = new Number(document.getElementById("txtfield").value);
    document.getElementById("txtfield").value = null;
}
function adddivider(){
    operator = '/';
    number1 = new Number(document.getElementById("txtfield").value);
    document.getElementById("txtfield").value = null;
}
function addAddition(){
    operator = '+';
    number1 = new Number(document.getElementById("txtfield").value);
    document.getElementById("txtfield").value = null;
}
function adddot(){
    document.getElementById("txtfield").value += ".";
}



function total(){
    number2 = new Number(document.getElementById("txtfield").value);
    calculate();

}

function cleartxtfield() {
    document.getElementById("txtfield").value = null;
}

function calculate() {
    switch(operator){
        case '+':
            output = number1+number2;
            break;
        case '-':
            output = number1-number2;
            break;
        case '*':
            output = number1*number2;
            break;
        case '/':
            ouput = new Number(number1)/ new Number(number2);
            break;
    }
    document.getElementById("txtfield").value = output;

    number1 =0;
    number2 =0;
}