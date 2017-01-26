/* Given an array, create and return a new one containing all
the values of the provided array, made negative (not simply multiplied by -1).
Given [1,-3,5], return [-1,-3,-5]. */

function NegOut(arr) {
    var arrnew = []
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] > 0){
            arrnew[idx] = (arr[idx] - (arr[idx] * 2));
        }
        else {
            arrnew[idx] = arr[idx];
        }
    }
    return arrnew;
}
console.log(NegOut([1, -3, 5]));
//console.log(NegOut([3, 2, -2, -5, 0, 12]));
