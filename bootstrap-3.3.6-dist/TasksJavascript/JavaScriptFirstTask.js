/**
 * Created by LuceroPenarrieta on 1/20/2016.
 */
var CalculMath=function()
{
    var numbers;
    var min;
    var max;

    this.doOperations= function () {
        numbers=arguments;
        min=numbers[0];
        max=numbers[0];

        console.log('MAX is:',getMax(0,numbers.length-1,max));
        console.log('MIN is:',getMin(0,numbers.length-1,min));
        console.log('AVG is:',getAvg());
        console.log('SUM is:',getSum(0,numbers.length-1));
    };
    /**
     * getSum()=Is a function that add all the parameters.
     * getSum(ini, end)
     * using two counters: ini= parameter that describes the position initial-index.
     *                     end= parameter that describes the length of the arguments-1.
     */

    this.getSum=function(){
        numbers=arguments;
        if(numbers.length!=0){
            return getSum(0,numbers.length-1);
        }
    };
    var getSum=function(ini,end){
            if(ini===end){
                return numbers[end];
            }
            return numbers[ini]+ getSum(ini+1,end);
    };
    /**
     * getAvg()=Is a function that use the getSum() function.
     * To calculate the average of the parameters sending.
     */
    this.getAvg=function(){
        numbers=arguments;
        if(numbers.length!=0){
            return getSum(0,numbers.length-1)/numbers.length;
        }
    };
    var getAvg=function(){
        return getSum(0,numbers.length-1)/numbers.length;
    };
    /**
     * getMin()=Is a function that select the minor parameter.
     * getMin(ini, end, min)
     * using three counters: ini= parameter that describes the position initial-index.
     *                       end= parameter that describes the length of the arguments-1.
     *                       min= parameter that stores the min value(uploaded).
     */

    this.getMin=function(){
        numbers=arguments;
        if(numbers.length!=0){
            return getMin(0,numbers.length-1,min);
        }
    };
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
    /**
     * getMax()=Is a function that select the max parameter.
     * getMax(ini, end, max)
     * using three counters: ini= parameter that describes the position initial-index.
     *                       end= parameter that describes the length of the arguments-1.
     *                       max= parameter that stores the max value(uploaded).
     */
    this.getMax=function(){
        numbers=arguments;
        if(numbers.length!=0){
            return getMax(0,numbers.length-1,max);
        }
    };
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



