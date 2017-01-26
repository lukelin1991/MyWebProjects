/* Kenny tries to stay safe, but somehow everyday something happens.
Out of the last 100 days, there were 10 days with volcanos, 15 others with
tsunamis, 20 earthquakes, 25 blizzards and 30 meteors (for 100 days total).
If these probabilities continue, write whatHappensToday() to print a day's outcome */

function whatHappensToday(){
    var chance = Math.random() * 100;
    if (chance <= 10) {
        return "volcano erupts and Kenny dies from fume inhalation.";
    }
    if (chance <= 25){
        return "Tsunami crashes and shatters Kenny's bones.";
    }
    if (chance <= 45){
        return "earthquake rumbles and Kenny falls into a sinkhole and dies.";
    }
    if (chance <= 70){
        return "blizzard Freezes Kenny to death.";
    }
        return "meteor strikes and destroys the earth, killing Kenny.";
}
console.log(whatHappensToday());

//haha South Park is awesome, love the last few questions.
