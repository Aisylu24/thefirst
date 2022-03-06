const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

//
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//
const myStr ="FirstLine\n\t\\SecondLine\nThirdLine"

//
const myStr = "This is the start. " + "This is the end.";

//
let myStr = "This is the first sentence. ";
myStr+="This is the second sentence." 

//
const myName = "Ais";
const myStr = "Hello " + myName + "what's up";

//
const someAdjective = "stunning";
let myStr = "Learning to code is ";
myStr += someAdjective 

//
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

//
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//
 
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line


//

const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; // Change this line


//

const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line

//
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line

//
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "my " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " here"


//
const myArray = [18, 64, 99];
const[0] = 45

//
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];


//
  const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])


//
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop()
console.log(removedFromMyArray);
//

const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift()

console.log(myArray);

//

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])


//

const myList = [['aisylu', 25],['aisylu', 25],['aisylu', 25],['aisylu', 25],['aisylu', 25]];


//

function reusableFunction() {
  console.log("Hi World"); 
  }

  reusableFunction()


  // 0603 1

  function functionWithArgs(a,b) {
    console.log(a+b)
  }
  
  functionWithArgs(1,2)
  functionWithArgs(7,9)


  // 2


  function timesFive(num) 
{ return num *5 }


timesFive(5) 

timesFive(2)

timesFive(0) 


// 3


let myGlobal = 10
let oopsGlobal = 5
function fun1() {
oopsGlobal
  
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


// 4

function myLocalScope() {
  
let myVar
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);


// 5

const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear = 'sweater'
  // Only change code above this line
  return outerWear;
}

myOutfit();


// 6

let sum = 0;
function addFive() {
 sum = sum + 5
}
function addThree() {
   sum = sum + 3;
}

addFive()
addThree()



// 7

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7)


// 8

function nextInLine(arr, item) {
  arr.push(item)
  return arr.shift();
    
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  
  // 9

  function welcomeToBooleans() {
    return true;
    

// 10

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue) {
  return "Yes, that was true" 
  }
  return "No, that was false"
}

// 11

function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

// 12

function testStrict(val) {
  if (val===7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//13