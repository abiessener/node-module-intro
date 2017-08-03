// takes in an array of numbers and returns the sum of them all

function reduceArray(arrayToReduce){
    var total = 0;
    
    for (var i = 0; i  < arrayToReduce.length; i++) {
        total += arrayToReduce[i];
    }
    
    return total;
}

console.log(reduceArray([1,3,4,2,5]))
module.exports = {
    arraySum: reduceArray
}