var myNumber = 42;
var myName = "Luke";
var temp = 0;

console.log (myName, myNumber)

function NameNumber (myName,myNumber){
  temp = myName;
  myName = myNumber;
  myNumber = temp;

  return [myName, myNumber];
}
console.log(NameNumber(myName, myNumber));
