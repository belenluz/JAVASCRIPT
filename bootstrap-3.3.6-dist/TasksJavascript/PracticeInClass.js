/**
 * Created by LuceroPenarrieta on 1/25/2016.
 */
var countWords= function (paragraph) {
    var v=paragraph.split(" ");
    return v.length;
};
var paragraph='Hello friends.';
var totalWords=countWords(paragraph);
console.log('Total words:', totalWords);
