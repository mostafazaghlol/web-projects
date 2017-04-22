"use strict";

searchButton.addEventListener("click",searchit);
function searchit(){
    loading.style.display='block';
    weather.style.display='none';
    var cityName=cityname.value;
    if(cityName.trim().length == 0){
       return alert("Enter the name of the city Correct please ?");
    }
    var key='04840bd198d3f3c11e23337e95ef93d0';
    var URL='http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units=metric&appid='+key;
    var http=new XMLHttpRequest();
    var method = 'GET';
    http.open(method,URL);
    http.onreadystatechange = function(){
        if(http.readyState === XMLHttpRequest.DONE && http.status === 200){
            var data=JSON.parse(http.responseText);
            var weatherdata=new Weather(cityName,data.weather[0].description.toUpperCase());
            weatherdata.temperture=data.main.temp;
            updatedata(weatherdata);
            
        }else if(http.readyState === XMLHttpRequest.DONE){
            alert("Something went worng");
        }
    };
    http.send();
    
}

function updatedata(weatherdata){
    weathercity.textContent = weatherdata.cityname;
    weatherDescription.textContent = weatherdata.description;
    weatherTemp.textContent = weatherdata.temperture;
    
    loading.style.display='none';
    weather.style.display='block';
}