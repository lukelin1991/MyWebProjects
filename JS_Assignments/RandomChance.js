function slots(quarters){
  function chance(){
    return Math.floor(Math.random() * 100);
  }
  for (var game = quarters; game >= 0; game--){
    if (chance() === 1){
      game += Math.floor((Math.random() * 50) + 55);
      console.log("You WIN!!! You have " + (game - 1) + " quarters NOW!");
      break;
    }
    else if (game > 0){
      console.log("Sorry! You didn't win, please try again. You have " + game + " quarters left.");
    }
    else{
      console.log("You didn't win, you have 0 quarters left.  Try again next time!");
    }
  }
}
slots(100);
