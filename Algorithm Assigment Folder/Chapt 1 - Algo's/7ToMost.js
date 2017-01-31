/* Build function that accepts array.
Return a new array with all values except first, adding 7 to each.
Do not alter the original array. */

function PlusSeven(arr){
    newarr = []
    for (var idx = 0; idx < arr.length; idx++){
        newarr[idx] = arr[idx] + 7
        if (arr[idx] == arr[0]){
          newarr[idx] = arr[idx];
        }
    }
    return newarr;
}
console.log(PlusSeven([-3, 0, 4, 9, 12]));
