/**
 * Created by LuceroPenarrieta on 1/20/2016.
 */
var CalculMath=function()
{
    var numbers;
    var min;
    var max;
    var sum_numbers;

    this.doOperations= function () {
        numbers=arguments;
        min=numbers[0];
        max=numbers[0];

        console.log('MAX is:',getMax(0,numbers.length-1,max));
        console.log('MIN is:',getMin(0,numbers.length-1,min));
        //console.log('AVG is:',getAvg());
        console.log('SUM is:',getSum(0,numbers.length-1));
    };

    this.getSum=function(){
        sum_numbers=arguments;
        return getSum(0,sum_numbers.length-1);
    };

    var getSum=function(ini,end){
        if(ini===end){
            return sum_numbers[end];
        }
        return sum_numbers[ini]+ getSum(ini+1,end);
    };
    ////////////////////////////////////////

    var getAvg=function(){

        return getSum(0,numbers.length-1)/numbers.length;
    };
    ////////////////////////////////////////

    var getMin=function(ini,end,min){

        if(ini===end){
            return min;
        }
        else {
            if (numbers[ini+1]<min) {
                min = numbers[ini + 1];

            }
            return getMin(ini+1,end,min);
        }
    };
    ///////////////////////////////////////

    var getMax=function(ini,end,max){

        if(ini===end){
            return max;
        }
        else {
            if (numbers[ini+1]>max) {
                max = numbers[ini + 1];

            }
            return getMax(ini+1,end,max);
        }

    };
};