/**
 * Created by LuceroPenarrieta on 2/1/2016.
 */
/*Says Hello
@param{function} cb, any function to execute.
 */

var sayHello=function(name,cb){
    console.log("say hello",name);
    cb(name);
};
sayHello(name,function(name){
    console.log("How are you",name);
});


(function(a,b){
    a=7;b=1;
    var res= a+b;
    console.log('sum is:',res);
})();
