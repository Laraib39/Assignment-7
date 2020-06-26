function getNumber(num){
    var output = document.getElementById("output");
    output.value += num; 
}
function clearResult(){
   var clr = document.getElementById("output");
    clr.value = "";
}
function getResult(){
    var result = document.getElementById("output");
    result.value = eval(result.value);
}