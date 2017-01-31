/* Given arr, add 1 to odd elements ([1], [3], etc.),
console.log all values and return arr.*/

function inc(arr){
    for (var idx = 0; idx < arr.length; idx++){
        if (idx % 2 !== 0){
            arr[idx] = arr[idx] + 1;
        }
        console.log(arr[idx])
    }
    return arr;
}

console.log(inc([1, 3, 2, 7, 5, 9]));
