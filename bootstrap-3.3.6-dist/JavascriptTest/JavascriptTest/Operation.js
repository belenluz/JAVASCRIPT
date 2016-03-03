var Operation = function () {
    var listValues = [];
    var listOperation = [];
    var op1;
    var op2;
    var res;

    this.storeValue = function (value) {
        listValues.push(value);
    };

    this.storeOperation = function (value) {
        listOperation.push(value);
    };
    this.getResult = function () {
        return res;
    };

    this.doOperation = function () {
        if(listValues.length === 2){
            if (listOperation.pop() === '+') {
                res = parseInt(listValues[0]) + parseInt(listValues[1]);
            }
            if (listOperation.pop() === '-') {
                res = listValues[0] - listValues[1];
            }
            if (listOperation.pop() === '*') {
                res = listValues[0] * listValues[1];
            }
            if (listOperation.pop() === '/') {
                res = listValues[0] / listValues[1];
            }
            listValues = [];
            listValues.push(res);
            $selector = $('#parameter');
            $selector.val(res);
        }
        res = listValues[0];
    };

    
};