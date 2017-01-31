var daysUntilMyBirthday = 60
var sad = "days until my birthday. Such a long time... :("
var excited = "days until my birthday!"
var scream = "DAYS UNTIL MY BIRTHDAY!!!"
var partaytime1 = "♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*"
var partaytime2 = "♪ღ♪░H░A░P░P░Y░░░B░I░R░T░H░D░A░Y░░░░T░O░░░M░E░░░!░♪ღ♪"
var partaytime3 = "*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«"

while (daysUntilMyBirthday >= 0){
    if (daysUntilMyBirthday >= 30){
        console.log(daysUntilMyBirthday, sad);
    }
    else if (daysUntilMyBirthday > 5){
      console.log(daysUntilMyBirthday, excited);
    }
    else if (daysUntilMyBirthday > 0){
      console.log(daysUntilMyBirthday, scream);
    }
    else{
      console.log(partaytime1 + "\n" + partaytime2 + "\n" + partaytime3);
    }
    daysUntilMyBirthday = daysUntilMyBirthday - 1;
}
