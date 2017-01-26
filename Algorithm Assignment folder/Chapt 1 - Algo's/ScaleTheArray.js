/* Given an array arr and a number num, multiply all values in arr by num,
and return the changed array arr. */

function ScaleTheArray(arr, num){
    for (var idx = 0; idx < arr.length; idx++){
        arr[idx] = arr[idx] * num;
    }
    return arr;
}

console.log(ScaleTheArray([1, 3, 5, 7, 9], 2));
