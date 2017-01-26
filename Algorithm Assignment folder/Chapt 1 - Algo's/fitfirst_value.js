/*Your function should accept an array.
If value at [0] is greater than array’s length, print "Too big!";
if value at [0] is less than array’s length, print "Too small!";
otherwise print "Just right!".*/

function fitval(arr) {
    if (arr[0] > arr.length){
        console.log("Too Big!");
    }
    else if (arr[0] < arr.length){
        console.log("Too Small!");
    }
    else{
        console.log("Just Right!");
    }
}
fitval([2]);
fitval([4, 3, 5, 2, 9, 6, 1]);
fitval([2, 6]);
