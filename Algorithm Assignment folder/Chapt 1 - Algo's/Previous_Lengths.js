/* You are passed an array containing strings.
Working within that same array, replace each string with a number –
the length of the string at previous array index – and return the array. */

function previousLength(arr) {
    for (var idx = 0; idx < arr.length; idx++){
        if (typeof(arr[idx]) === "string"){
            arr[idx] = arr[idx].length;
        }
    }
    return arr;
}
console.log(previousLength([4, "Chicken", "Indescribable", 2, 7, "I Hate Functions Still.."]));
