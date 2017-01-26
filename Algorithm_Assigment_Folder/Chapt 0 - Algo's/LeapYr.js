function leapYear(yr) {
  if (yr % (4 || 400) == 0 && yr % 100 != 0 ) {
    console.log("True");
  }
  else {
    console.log("False");
  }
}

leapYear(1991);
