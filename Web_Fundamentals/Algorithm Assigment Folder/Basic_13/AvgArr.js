function Avg(arr){
  var sum = arr[0];
  for (var idx = 0; idx < arr.length; idx++){
    sum += arr[idx];
  }
  console.log("avg is " + sum/arr.length);
}

Avg([3, 2, 5, 12]);
