"use strict";
function Weather(cityname,description){
    this.cityname=cityname;
    this.description=description;
    this._temperture='';
}
Object.defineProperty(Weather.prototype,'temperture',{
    get: function(){
    return this._temperture;
},
    set:function(value){
        this._temperture=(value).toFixed(2)+'C.';
    }
    
});
