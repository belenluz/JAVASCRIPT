/*This is a function that create a Table.
*/
var mouseOverHandler=function (e) {
    //alert('hola');
    e.target.innerText =Date.now();//celda donde llevo el mouse con inner lo cambio...
    //target is important...
    e.target.style.backgroundColor = "red";
    console.log('OverTable');
    e.target.removeEventListener('mouseover', mouseOverHandler);
}
var mouseOutHandler = function (e) {
    //alert('hola');
    e.target.innerText = Date.now();//celda donde llevo el mouse con inner lo cambio...
    //target is important...
    e.target.style.backgroundColor = "green";
    console.log('OutTable');
    e.target.removeEventListener('mouseout', mouseOutHandler);
}
var mouseClickCell = function (e) {
    //alert('hola');
    e.target.innerText = Date.now();//celda donde llevo el mouse con inner lo cambio...
    //target is important...
    e.target.style.backgroundColor = "yellow";
    console.log('ClickTable');
    e.target.removeEventListener('click', mouseClickCell);
}
var createTable = function (size) {
    var row, cell;
    var myTable = document.createElement('table');
   
    

    for (var i = 0; i < size; i++) {
        row = document.createElement('tr');//row creado tres veces
        for (var j = 0; j < size; j++) {
            cell = document.createElement('td');//por cada row tres celdas
            cell.style.backgroundColor = "green";
            cell.innerText = 'x-' + i + '-' + j;
            cell.addEventListener('mouseover', mouseOverHandler);
            cell.addEventListener('mouseout', mouseOutHandler);
            cell.addEventListener('click', mouseClickCell);

            /*
            cell.addEventListener('mouseover', function (e) {
                //alert('hola');
                //e.target.innerText = '!!!!';//celda donde llevo el mouse con inner lo cambio...
                //target is important...
                e.target.borderColor= "yellow";
                console.log('hola');
            });*/
            //dependecy between row and cell. 
            row.appendChild(cell);
        }
        //dependencia entre 
        myTable.appendChild(row);
    }
    
    //manipulacion del objeto
    var body = document.getElementsByTagName('body')[0];//nos devuelve un arreglo.
    body.appendChild(myTable);
};


window.onload = function () {//apenas la ventana se haya cargado ejecutamos esta function.
    createTable(3);
};

