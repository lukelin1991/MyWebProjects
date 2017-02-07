/*Given an array, return the sum of the first value in the array, plus the array's length.
What happens if the array's first value is NOT a number, but a string (like "what?")
or a boolean (like false)*/

function firstpluslength(arr){
  return arr[0] + arr.length
}

//first console log gave me back the results (regardless of false statement) of the arr.length
console.log(firstpluslength([false, 3, 6, 2, 2, 6]));
//2nd console log gave me back the arr.legnth + the string itself.
console.log(firstpluslength(["cookies", 5, 9, 6, 5]));
//3rd test did the same thing as the 1st test.
console.log(firstpluslength([true, 2, 4, 1]));
//4th test i did NUMBERS only and it gave me the NUMBER of the 1st array number + the array length which was 11.
console.log(firstpluslength([5, 7, 8, 9, 6, 0]));
