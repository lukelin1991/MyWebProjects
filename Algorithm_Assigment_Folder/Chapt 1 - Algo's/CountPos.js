/*Given array of numbers, create function to replace last value with number of positive values.
Example: countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it. */

function countPos(arr){
    var count = 0;
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] > 0){
            count += 1;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

console.log(countPos([-1, 1, 1, 1]));
console.log(countPos([-3, -5, 2, 5, 4, 8]));
