function whatHappensToday(){
  function chance(){
    return (Math.random() * 100);
  }
  if(chance() <= 30){
    console.log("meteor strikes and destroys the earth, killing Kenny.");
  }
  if(chance() <= 25){
    console.log("blizzard Freezes Kenny to death.");
  }
  if(chance() <= 20){
    console.log("earthquake rumbles and Kenny falls into a sinkhole and dies.");
  }
  if(chance() <= 15){
    console.log("Tsunami crashes and shatters Kenny's bones.");
  }
  if(chance() <= 10){
      console.log("volcano erupts and Kenny dies from fume inhalation.");
  }
}

console.log(whatHappensToday());
