/**
 * Created by LuceroPenarrieta on 1/26/2016.
 */
var dataTime=function(){
    var list=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    var date=new Date();
    var index=date.getDay();
    console.log('Today is:',list[index-1]);
    console.log('Current time is :',
        date.getHours(),getAMPM(date.getHours()),
        date.getMinutes(),':',
        date.getSeconds());
};
var getAMPM= function(t){
    if(t>12){
        return "PM";
    }
    return "AM";
};