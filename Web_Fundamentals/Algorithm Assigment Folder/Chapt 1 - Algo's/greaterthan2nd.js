/*For [1, 3, 5, 7, 9, 13], print values that are greater than its 2nd value.
Return how many values this is.*/

var counter = 0

function greaterthan2nd(arr){
  for (var idx = 1; idx <= arr.length;idx++){
    if (arr[idx] > arr[1]){
      console.log(arr[idx])
      counter++
    }
  }
  return counter
}
console.log(greaterthan2nd([1, 3, 5, 7, 9, 13]))
