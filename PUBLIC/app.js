








var screen = document.getElementById('screen');
isCalculated = true;


function getValueOfBtn(val) { 
    if (isCalculated && isCalculated != "string" ) {
        clearAll();
    }  
screen.value += val;
isCalculated = false;
}


function calculate() {
isCalculated =true;
var sum = screen.value;
var finalSum = eval(sum);    
screen.value = finalSum;
}


function clearAll() {
    screen.value = "";
}


































