'use strict';
calculateButton.addEventListener('click',calculateAge);

function calculateAge(){
    var loading =document.querySelector('#load');
    var result2=document.querySelector('#result');
    var yearscalculated=document.querySelector('#Years');
    loading.style.display='block';
    result2.style.display='none';
    var today=new Date;
    var year =today.getFullYear();
    var yearofbirth=parseInt(yearold.value);
    if(yearofbirth>year){
         loading.style.display='none';
        result2.style.display='none';
        return alert("enter Year Correct...?");
    }
    var result=year-yearofbirth;
    loading.style.display='none';
    result2.style.display='block';
    yearscalculated.textContent=result+'years';
    yearscalculated.style.display='block';
    
}