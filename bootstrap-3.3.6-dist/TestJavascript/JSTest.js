
var Numbers = function () {
};
/*
1. getPrimeNumbers: Which prints the first N ‘prime’ numbers 
(N is a value provided by the user)
*/
Numbers.prototype.getPrimeNumbers = function (n) {
    //This for is to verify that control the N prime numbers until the 
    // parameter n.
    for(var i=0; i<n ; i++){
        if (!(i % 2 === 0)) {
            if (!(i % (n - 1) === 0)) {
                console.log(i);
            }
        }
    }

};
/*
3. countVowels: Which counts the number of vowels ‘a’, ‘e’, ‘i’, ‘o’ and ‘u’ that a given paragraph
has (paragraph provided by the user).
*/
Numbers.prototype.countVowels = function (argument) {
    var numberVowels = 0;
    //This for is to review each letter in the paragraph until the lenght of it.
    for(var i=0; i<argument.length; i++){
        switch (argument[i]) {
            case 'a':
                numberVowels++;
                break;
            case 'e':
                numberVowels++;
                break;
            case 'i':
                numberVowels++;
                break;
            case 'o':
                numberVowels++;
                break;
            case 'u':
                numberVowels++;
                break;
            default:
            }
    }
    console.log(numberVowels);
};
/*
4. evalParagraph: Which, given a long paragraph and a letter/char 
provided by the user, print the
count and all the words that contain the specified char.
Example. var paragraph = ‘hello world’;
var letter = ‘h’;
⇒ Count is: 1
⇒ Words: hello
*/
Numbers.prototype.evalParagraph = function (paragraph) {
    var p = paragraph.split('');
    var v;
    //This for is to review the letters of the paragraph. 
    var r = p;
    for (var i = 0; i < p.length; i++) {
        var n = 1;
        v = p[i];
        for (var j = i + 1; j < r; j++) {
            //This if is to review if the next letter is equal.
            if (v === p[j]) {
                r = p.slice(j + 1);
                n = n + 1;
            }
        }
        console.log('Count is:', p[i], n);
     
    }
};
/*
2. getFactorial: Which calculates the factorial of a given 
number (number provided by the user).
*/
Numbers.prototype.getFactorial = function (num) {
    if (num < 0) {
        console.log('-1');
    }
    else if (num === 0) {
        console.log('1');
    }
    else {
        num * Numbers.prototype.getfactorial(num - 1);
    }
};
/*
5. Create a separate file which has an auto-executable function 
in order to run all methods (all
4 above exercises) from JSTest class
*/
(function () {
    var n = new Numbers();
    var p = 8;
    var vowels = 'hola';
    var paragraph = 'abcdddd';
    var f = 0;

    console.log('The N prime numbers is:', p);
    n.getPrimeNumbers(p);

    console.log('The number of vowels is:',vowels);
    n.countVowels(vowels);

    console.log('Number of char for word', paragraph);
    n.evalParagraph(paragraph);
    
    n.getFactorial(f);
    

})();