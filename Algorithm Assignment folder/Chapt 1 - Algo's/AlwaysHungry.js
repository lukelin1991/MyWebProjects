/* Create a function that accepts an array,
and prints "yummy" each time one of the values is equal to "food".
If no array elements are "food", then print "I'm hungry" once. */

function alwaysHungry(arr){
    var count = 0;
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] === "food"){
            console.log("yummy");
        }
        else if (arr[idx] !== "food" && count === 0){
          console.log("I'm Hungry!");
          count += 1;
        }
    }
}
alwaysHungry(["Yu-Gi-Oh Cards", "Chicken", "food", "food", 3.141592653589793238462643383279]);
