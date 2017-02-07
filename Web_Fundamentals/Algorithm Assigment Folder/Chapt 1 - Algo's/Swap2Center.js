/* Given array, swap first and last,
third and third-tolast, etc.
Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].
Change [1,2,3,4,5,6] to [6,2,4,3,5,1]. */

function swap2center(arr){
    for (idx = 0; idx < arr.length / 2; idx += 2){
        var temp = arr[idx];
        arr[idx] = arr[arr.length - (idx + 1)];
        arr[arr.length - (idx + 1)] = temp;
    }
    return arr;
}

console.log(swap2center([true, 42, "Ada", 2, "pizza"]));
console.log(swap2center([1, 2, 3, 4, 5, 6]));
