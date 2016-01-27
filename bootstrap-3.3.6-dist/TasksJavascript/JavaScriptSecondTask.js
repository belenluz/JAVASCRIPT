/**
 * Created by LuceroPenarrieta on 1/26/2016.
 */
/**
 * This a function that display the current day with the Hours-Minutes-Seconds.
 * This function use the getAMPM() function.
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
/**
 *
 * @param t: This is a parameter of type date.getHours() that is sending to getAMPM() function.
 * @returns {Returns a string that defines the time of day after-before might day.}
 */
var getAMPM= function(t){
    if(t>12){
        return "PM";
    }
    return "AM";
};