/* Build a function that takes array of numbers.
The function should print second-to-last value in the array,
and return first odd value in the array. */

function prReturn(arr){
    console.log(arr[arr.length - 2]);
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] % 2 !== 0){
            return arr[idx];
        }
    }
}

console.log(prReturn([2, 3, 4, 5, 6, 7]));
