/*This Length That Value
Given two numbers, return array of length num1 with each value num2.
Print "jinx!" if they are the same. */

function jinx(num1, num2){
  var arr = []
  for (var idx = 0; idx < num1; idx++){
    arr[idx] = num2;
  }
  if (num1 == num2){
    console.log("Jinx!");
  }
  return arr;
}
jinx(23, 23);
jinx(12, 14);
