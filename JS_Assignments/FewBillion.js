// king's Offer = $10,000;
var wage = 0.01;

for (var days = 1; days <= 30; days++) {
    wage = wage * 2;
    if (wage == Infinity){
      console.log("$" + Infinity);
    }
}
console.log("$" + wage);


//How many days would it take the servant to make $10,000 dollars? 20 days.

//How about 1 billion? 37 days.

/*In JavaScript, there is a value Infinity,
how many days until the servant has infinite money? 1031 days. */
