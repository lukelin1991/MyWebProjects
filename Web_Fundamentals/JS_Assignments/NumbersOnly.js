function numbersOnly(arr){
  var newarr = [];
  for (var idx = 0; idx < arr.length; idx++){
    if (typeof arr[idx] === "number"){
      newarr.push(arr[idx]);
    }
  }
    console.log(newarr);
}
numbersOnly([1, "apple", -3, "orange", 0.5]);
