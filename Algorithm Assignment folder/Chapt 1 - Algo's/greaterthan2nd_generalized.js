/*Values Greater than Second, Generalized
Write a function that accepts any array, and returns a new array with the
array values that are greater than its 2nd value.  Print how many values this is.
What will you do if the array is only one element long?*/

function greaterthan2nd(arr){
  var counter = 0
  var newArr = []
  if (arr.length <= 2){
    console.log(counter)
    return newArr
  }
  else{
    for (var idx=2; idx <= arr.length; idx++){
      if (arr[idx] > arr[1]){
        newArr.push(arr[idx])
        counter++
      }
    }
    console.log(counter)
    return newArr
  }
}
//test #1 gave me all the numbers bigger than 4.
console.log(greaterthan2nd([3,4,5,7,6,9]))
/*test #2 didnt log anything besides 0 and [] because it could not push anything
because there was only 1 array number.*/
console.log(greaterthan2nd([4]))
