/* Create a function that takes array of numbers.
The function should print the lowest value in the array,
and return the highest value in the array. */

function printLowHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for (var idx = 1; idx < arr.length; idx++){
        if (arr[idx] < low){
            low = arr[idx];
        }
        else if (arr[idx] > high){
            high = arr[idx]
        }
    }
    console.log(low);
    return high;
}

console.log(printLowHigh([4, 6, 3, -1]));
//console.log(printLowHigh([2, 6, 5]));
