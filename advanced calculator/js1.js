var button1=document.getElementById('One');
var button2=document.getElementById('Two');
var button3=document.getElementById('Three');
var button4=document.getElementById('four');
var button5=document.getElementById('five');
var button6=document.getElementById('six');
var button7=document.getElementById('siven');
var button8=document.getElementById('eight');
var button9=document.getElementById('nine');
var button0=document.getElementById('zero');
var buttonadd=document.getElementById('pluse');
var buttonsub=document.getElementById('sub');
var buttonmul=document.getElementById('multi');
var buttondiv=document.getElementById('div');
var buutonequal=document.getElementById('equal');
var textarea=document.getElementById('textarea');
var result=document.querySelector('span');
var label=document.querySelector('#label');

var x="";
var num1=0 ,num2=0;
var operation="";


button1.addEventListener("click",button1function);
button2.addEventListener("click",button2function);
button3.addEventListener("click",button3function);
button4.addEventListener("click",button4function);
button5.addEventListener("click",button5function);
button6.addEventListener("click",button6function);
button7.addEventListener("click",button7function);
button8.addEventListener("click",button8function);
button9.addEventListener("click",button9function);
button0.addEventListener("click",button0function);
buttonadd.addEventListener("click",buttonaddfunction);
buttonsub.addEventListener("click",buttonsubfunction);
buttonmul.addEventListener("click",buttonmulfunction);
buttondiv.addEventListener("click",buttondivfunction);
buutonequal.addEventListener("click",buttonequalfunction);



function button1function(event){
    x=x+'1';
    textarea.value=x;
}
function button2function(event){
    x=x+'2';
    textarea.value=x;
}
function button3function(event){
    x=x+'3';
    textarea.value=x;
}
function button4function(event){
    x=x+'4';
    textarea.value=x;
}
function button5function(event){
    x=x+'5';
    textarea.value=x;
}
function button6function(event){
    x=x+'6';
    textarea.value=x;

}
function button7function(event){
    x=x+'7';
    textarea.value=x;
}
function button8function(event){
    x=x+'8';
    textarea.value=x;
}
function button9function(event){
    x=x+'9';
    textarea.value=x;
}
function button0function(event){
    x=x+'0';
    textarea.value=x;
}
function buttonaddfunction(event){
        num1=parseFloat(x);
    x='';
    textarea.value="0";
    operation="+";
}
function buttonsubfunction(event){
    num1=parseFloat(x);
        x='';

    textarea.value="0";
    operation="-";
}
function buttonmulfunction(event){
    num1=parseFloat(x);
        x='';
    textarea.value="0";
    operation="*";
}
function buttondivfunction(event){
    num1=parseFloat(x);
        x='';
    textarea.value="0";
    operation="/";
}
function buttonequalfunction(event){
    num2=parseFloat(x);
    var result1;
    switch(operation){
        case "+":
            result1=num1+num2;
            result.textContent=result1;
            label.style.display="block";
            break;
        case "-":
            result1=num1-num2;
            result.textContent=result1;
            label.style.display="block";
            break;
        case "*":
            result1=num1*num2;
            result.textContent=result1;
            label.style.display="block";
            break;
        case "/":
            result1=num1/num2;
            result.textContent=result1;
            label.style.display="block";
            break;        
        }
    x="";
}
function restme(){
    x='';
    result.textContent="00";
    label.style.display="none";
}
