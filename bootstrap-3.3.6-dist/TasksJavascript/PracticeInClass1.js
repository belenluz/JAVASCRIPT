/**
 * Created by LuceroPenarrieta on 1/28/2016.
 */
var SearchCapicua=function(ini,end){
    var newvalue;
    for(var i=ini;i< end;i++){
       newvalue=capicua(ini);
        if(newvalue===ini){
            console.log('Is capicua:', ini);
        }
        ini++;
    }
};
var capicua=function(val){
    var newnumber;
    if(val.length==1){
      newnumber=val[val.length-1];
    }
    else{
            newnumber=val[val.length-1]+capicua(val.split("",val.length-1));
        }
    return newnumber;
};
