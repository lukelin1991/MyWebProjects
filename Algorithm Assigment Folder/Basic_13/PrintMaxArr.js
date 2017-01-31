function MaxArray(arr){
  if (arr.length == 0){
    console.log("nothing/no max");
    return;
  }
  var max = arr[0];
  for (var idx = 1; idx < arr.length; idx++){
    if (arr[idx] > max){
      max = arr[idx];
    }
  }
  console.log("max is " + max);
}

MaxArray([2, 4, 12, 32, -40, 9]);
