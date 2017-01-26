/* Given array, write a function that reverses values, in-place.
Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]. */

function reverse(arr){

    for (idx = 0; idx < arr.length / 2; idx++){
        var temp = arr[idx];
        arr[idx] = arr[arr.length - (idx + 1)];
        arr[arr.length - (idx + 1)] = temp;
    }
    return arr;
}

console.log(reverse([3, 1, 6, 4, 2]));
