var button1=document.getElementById('plural');
var button2=document.getElementById('Subtract');
var button3=document.getElementById('multi');
var button4=document.getElementById('division');
var num1=document.getElementById('num1');
var num2=document.getElementById('num2');
var res=document.getElementById('result');
button1.addEventListener("click",button1function);
button2.addEventListener("click",button2function);
button3.addEventListener("click",button3function);
button4.addEventListener("click",button4function);
function button1function(event){
    var n1=parseFloat(num1.value);
    var n2=parseFloat(num2.value);
    res.textContent=(n1+n2).toFixed(2).toString();
    
}
function button2function(event){
    var n1=parseFloat(num1.value);
    var n2=parseFloat(num2.value);
    res.textContent=(n1-n2).toFixed(2).toString();

}
function button3function(event){
    var n1=parseFloat(num1.value);
    var n2=parseFloat(num2.value);
    res.textContent=(n1*n2).toFixed(2).toString();

}
function button4function(event){
    var n1=parseFloat(num1.value);
    var n2=parseFloat(num2.value);
    res.textContent=(n1/n2).toFixed(2).toString();

}