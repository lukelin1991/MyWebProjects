/* Kyle (smarter than Kenny) notes that the chance of one disaster is totally unrelated
to the chance of another.  Change whatHappensToday() function to create
whatReallyHappensToday().  In this new function test for each disaster
independently, instead of assuming exactly one disaster will happen.
In other words, with this new function, all five might occur today – or none.
Maybe Kenny will survive! */

function whatReallyHappensToday(){
  function chance(){
    return (Math.random() * 100);
  }
    var disasterArr = ["volcano erupts and Kenny dies from fume inhalation.", "Tsunami crashes and shatters Kenny's bones.", "earthquake rumbles and Kenny falls into a sinkhole and dies.", "blizzard Freezes Kenny to death.", "meteor strikes and destroys the earth, killing Kenny."];

    if(chance() <= 30){
      console.log(disasterArr[4]);
    }
    if(chance() <= 25){
      console.log(disasterArr[3]);
    }
    if(chance() <= 20){
      console.log(disasterArr[2]);
    }
    if(chance() <= 15){
      console.log(disasterArr[1]);
    }
    if(chance() <= 10){
        console.log(disasterArr[0]);
    }
    else{
      return "Kenny lives because NOTHING Happened!";
    }
}
console.log(whatReallyHappensToday());
