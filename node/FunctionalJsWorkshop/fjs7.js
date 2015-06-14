/*
 function countWords(inputWords) {
   return inputWords.reduce(function (previousValue, currentValue, index, array) {
     previousValue[currentValue] = ++previousValue[currentValue] || 1;
     return previousValue;
   }, {});
 }

 module.exports = countWords

*/
 
 
var reduce = function(arr, reduction, init) {
    
    if (!arr.length) { return init; }
    
    var next = arr.shift(); 
    
    var reduced = reduction(init, next, 0, arr);
    return reduce(arr, reduction, reduced);
  };

module.exports = reduce;


