/* Create a function that accepts an array.
Every time that array has three odd values in a row,
print "That’s odd!" Every time the array has three evens in a row, print "Even more so!" */

function evensOdds(arr){
    EvenCount = 0
    OddCount = 0
    for (var idx = 0; idx < arr.length; idx++){
        if (arr[idx] % 2 !== 0){
            OddCount += 1;
            if (OddCount >= 3){
                console.log("That's Odd!")
            }
        }
        else{
            OddCount = 0;
        }
        if (arr[idx] % 2 === 0){
            EvenCount += 1;
            if (EvenCount >= 3){
                console.log("Even More So!")
            }
        }
        else{
            EvenCount = 0;
        }
    }
}

evensOdds([3, 1, 1, 1, 2, 3, 4, 2, 2, 2]);
