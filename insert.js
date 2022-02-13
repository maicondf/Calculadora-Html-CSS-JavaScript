function insert(num) {
    let numero = document.getElementById('result').innerHTML;
    if(numero.includes(".") && num === ".") return;
    document.getElementById('result').innerHTML = numero + num;
}
    
function btnClear() {
    document.getElementById('result').innerHTML = "";
}

function btnBack() {
    let result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

function btnCalculate() {
    let result = document.getElementById('result').innerHTML;
    
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    } else {
        document.getElementById('result').innerHTML = "Error";
    }
}