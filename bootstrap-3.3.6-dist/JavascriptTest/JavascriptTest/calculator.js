/*
var calculator = new Calculator();
calculator.draw();
*/

/*window.onload = function () {
    createTable();
};*/

var calculator = function () {

    var size = 5;
    var listNumbers = [];
    var listOperators = ['C', '/', '*', '-', '+', '='];
    var operation = new Operation();

    var clickCell = function () {
        $selector = $('#parameter');
        var value = $(this).text();
        if(value === '+' || value === '-' || value === '*' || value === '/'){
            operation.storeOperation(value);
            operation.doOperation();
        }
            /*if(value === '=' ){
                var result = operation.getResult();
                $selector.val(result);
            }*/
        else
        {
                if (value === '=') {
                    var res = operation.getResult();
                    $selector.val(res);
                }
                else{
                    $selector.val(value);
                    $(this).css("background-color", "green");
                    operation.storeValue(value);
                    }
            
        }
        
    };
    /*var clickCellOperation = function () {
        var symbol = $(this).text();
        operation.storeOperation(symbol);
        operation.doOperation();
    };
    /*var removeClickCell = function () {
        $(this).off();
        $(this).css("background-color", "red");
    };*/
    var generateNumbers = function () {
        for (var i = 0; i < size * 2; i++) {
            listNumbers[i] = i;
        }
    };
    var createOperations = function () {
        var page = $('body');
        var table = $('<table></table>');
        for (var i = 0; i < 2; i++) {
            var tr = $('<tr></tr>');
            for (var j = 0; j < size; j++) {
                var td = $('<td>  </td>');

                td.text(listOperators.pop());
                var id = i + '' + j;
                td.attr('id', id);
                tr.append(td);
            }
            table.append(tr);
        }
        page.append(table);
        //$('tr').on('click', 'td', clickCellOperation);
    };
    this.draw = function () {

        var page = $('body');
        var table = $('<table></table>');
        generateNumbers();
        for (var i = 0; i < 2; i++) {
            var tr = $('<tr></tr>');
            for (var j = 0; j < size; j++) {
                var td = $('<td>  </td>');

                td.text(listNumbers.pop());
                var id = i + '' + j;
                td.attr('id', id);
                tr.append(td);
            }
            table.append(tr);
        }
        page.append(table);
        createOperations();
        $('tr').on('click', 'td', clickCell);
        //$('tr').on('mouseover', 'td', removeClickCell); 

    };
   

};


