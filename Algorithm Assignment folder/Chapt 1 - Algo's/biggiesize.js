/*Given an array, write a function that changes all positive numbers in the array to “big”.
Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5]. */

function BiggieSize(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] > 0){
            arr[idx] = "big";
        }
    }
    return arr;
}
console.log(BiggieSize([-1, 3, 5, -5]));
