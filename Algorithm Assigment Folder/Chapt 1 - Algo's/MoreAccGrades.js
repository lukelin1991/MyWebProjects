/* For an additional challenge,
add ‘-’ signs to scores in the bottom two percent of A, B, C and D scores,
and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+).
Example: Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. Grade: D-". */

function accurateGrade(score){
  var gradeArr = ["Score: " + score + ". Grade: A","Score: " + score + ". Grade: B","Score: " + score + ". Grade: C", "Score: " + score + ". Grade: D","Score: " + score + ". Grade: F"];

  function plusminus(){
    if (score % 10 === 8 || score % 10 === 9){
      return "+"
    }
    else if (score % 10 === 1 || score % 10 === 2){
      return "-"
    }
    else{
      return "";
    }
  }

  if (score >= 90){
    if (score >= 93 && score < 98){
          console.log(gradeArr[0]);
    }
    else if (score >= 98){
      console.log(gradeArr[0] + " Uhh.. Sorry, I Dont give A+.")
    }
    else{
      console.log(gradeArr[0] + plusminus());
    }
  }
  else if (score >= 80){
    console.log(gradeArr[1] + plusminus());
  }
  else if (score >= 70){
    console.log(gradeArr[2] + plusminus());
  }
  else if (score >= 60){
    console.log(gradeArr[3] + plusminus());
  }
  else {
    console.log(gradeArr[4]);
  }
}
accurateGrade(82);
accurateGrade(99);
accurateGrade(63);
accurateGrade(55);
accurateGrade(78);
accurateGrade(92);
