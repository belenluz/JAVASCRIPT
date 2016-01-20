/**
 * Created by LuceroPenarrieta on 1/20/2016.
 */
var doOperations=function()
{
    var numbers=arguments;
    var min=numbers[0];
    var max=numbers[0];

    this.getSum=function(){
        return getSumT(0,numbers.length-1);
    };
    getSumT=function(ini,end){
        if(ini===end){
            return numbers[end];
        }
        return numbers[ini]+ getSumT(ini+1,end);
    };
    ////////////////////////////////////////
    this.getAvg=function(){
        return getAvgT();
    };
    getAvgT=function(){
        return getSumT(0,numbers.length-1)/numbers.length;
    };
    ////////////////////////////////////////
    this.getMin=function(){
        return getMinT(0,numbers.length-1,min);
    };
    getMinT=function(ini,end,min){
        if(ini===end){
            return min;
        }
        else {
            if (numbers[ini+1]<min) {
                min = numbers[ini + 1];

            }
            return getMinT(ini+1,end,min);
        }
    };
    ///////////////////////////////////////
    this.getMax= function() {
        return getMaxT(0,numbers.length-1,max);
    };
    getMaxT=function(ini,end,max){
        if(ini===end){
            return max;
        }
        else {
            if (numbers[ini+1]>max) {
                max = numbers[ini + 1];

            }
            return getMaxT(ini+1,end,max);
        }

    };
};