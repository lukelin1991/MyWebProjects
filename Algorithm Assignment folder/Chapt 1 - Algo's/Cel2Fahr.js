/*Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius,
and returns the equivalent temperature expressed in Fahrenheit degrees.

(optional) Do Fahrenheit and Celsius values equate at a certain number?
Scientific calculation can be complex,
so for this challenge just try a series of Celsius integer values starting at 200,
going downward (descending), checking whether it is equal to the corresponding Fahrenheit value. */

function celsiusToFahrenheit(cdegrees) {
    var Fahrenheit = (9 / 5 * cdegrees) + 32;
    return Fahrenheit;
}
console.log(celsiusToFahrenheit(30));

/*(optional) for(var cdegrees = 200;cdegrees <= (celsiusToFahrenheit(cdegrees)); cdegrees--){
  console.log(cdegrees);
} */
