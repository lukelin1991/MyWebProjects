/*Given array, create a function to return a new array where each value in the original has been doubled.
Calling double([1,2,3]) should return [2,4,6] without changing original. */

function dubvision(arr){
    var newarr = []
    for (var idx = 0; idx < arr.length; idx++){
        newarr[idx] = arr[idx] * 2;
    }
    return newarr;
}

console.log(dubvision([1, 2, 3]));
console.log(dubvision([2, 4, 6]));
