/**
 * Created by LuceroPenarrieta on 1/25/2016.
 */
var dataTime=function(){
    var date=new Date();
    var index=date.getDay();
    console.log('Today is:',days(date.getDay()));
    console.log('Current time is :',
        date.getHours(),':',
        date.getMinutes(),':',
        date.getSeconds());
};
var days=function(index){
    var day;
    if(index==0){
        day='Monday';
    };
    if(index==1){
        day='Monday';
    };
    return day;
};

var countWords= function (paragraph) {
    var v=paragraph.split(" ");
    return v.length;
};
var paragraph='Hello friends.';
var totalWords=countWords(paragraph);
console.log('Total words:', totalWords);
