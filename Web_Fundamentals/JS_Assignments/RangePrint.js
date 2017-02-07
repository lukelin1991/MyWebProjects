function rangePrint(start, finish, jump){
    for (var num = start; num < finish; num = num + jump){
      console.log(num);
    }
}

rangePrint(2, 10, 2);
