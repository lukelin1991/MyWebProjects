function fibonacci(nth){

  if (nth == 0 || nth == 1){
    return nth
  }
  var  fibo = [0, 1];
  for(var idx=2; idx<=nth; idx++){
      fibo[idx] = fibo[idx-2] + fibo[idx-1];

  }
  return fibo[nth];
}
console.log(fibonacci(0));
