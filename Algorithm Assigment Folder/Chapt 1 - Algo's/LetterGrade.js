/* Mr. Cerise teaches high school math.
Write a function that assigns and prints a letter grade,
given an integer representing a score from 0 to 100?
Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’.
Example: given 88, you should log "Score:88. Grade: B". Given the score 61, log the string "Score: 61. Grade: D". */

function Grades(score) {
    if (score >= 90){
      console.log("Score: " + score + ". Grade: A");
    }
    else if (score >= 80){
      console.log("Score: " + score + ". Grade: B");
    }
    else if (score >= 70){
      console.log("Score: " + score + ". Grade: C");
    }
    else if (score >= 60){
      console.log("Score: " + score + ". Grade: D");
    }
    else {
      console.log("Score: " + score + ". Grade: F");
    }
}

Grades(99);
