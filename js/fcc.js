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

// 13

function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

// 14

function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);


// 15

function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);


// 0703 1

function testGreaterThan(val) {
  if (val>100) {  // Change this line
    return "Over 100";
  }

  if (val>10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// 2 


function testGreaterOrEqual(val) {
  if (val>=20) {  // Change this line
    return "20 or Over";
  }

  if (val>=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);


// 3

function testLessThan(val) {
  if (val <25) {  // Change this line
    return "Under 25";
  }

  if (val<55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);


//4

function testLessOrEqual(val) {
  if (val<=12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val<=24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);


//5 

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >=25 && val <= 50) {
   
      return "Yes";
  }
  return "No";
}

testLogicalAnd(10);

// 6

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20 ) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);

 
// 7

function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }
  else  {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);


// 8

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
else {
  return "Between 5 and 10";
}
}

testElseIf(7);

// 9 


function orderMyLogic(val) {
  if (val < 5) {
   return "Less than 5";
  }
 else if (val < 10) {
   return "Less than 10";
 }
  else {
   return "Greater than or equal to 10";
}
}

orderMyLogic(7);

// 10

function testSize(num) {
  if (num < 5) {
   return "Tiny"
 } else if (num < 10) {
  return "Small"
 } else if (num < 15) {
   return "Medium" }
 else if (num < 20) {
   return "Large"
 } else {
    return "Huge"
 }
 
 }
 
 // testSize(7);


// 0803 1 

const golfNames = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

function golfScore(par, strokes) {

  if (strokes == 1)  { return golfNames[0]}
 else if (strokes <= par - 2){ return golfNames[1]}
 else if (strokes == par - 1) {return golfNames[2]}
 else if (strokes == par ) {return golfNames[3]}
  else if (strokes == par + 1) {return golfNames[4]}
   else if (strokes == par + 2) {return golfNames[5]}
   else(strokes >= par + 3)
   return golfNames[6]

}

console.log(golfScore(5, 4))

//2

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch(val) { case 1:
    answer = "alpha"
    break;
  case 2:
    answer = "beta"
    break;
  
    case 3:
    answer="gamma"
    break;
    case 4:
    answer= "delta"
    break;}

  // Only change code above this line
  return answer;
}

caseInSwitch(1);


//3

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

switch (val) {
  case "a": answer = "apple";
  break;
  case "b": answer = "bird"; 
  break;
  case "c": answer = "cat";
  break;

  default: answer = "stuff";
break; }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);


// 4

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val)
{
case 1:
case 2:
case 3:
answer = "Low";
break;
case 4: 
case 5:
case 6:
answer = "Mid";
break;
case 7: 
case 8:
case 9:
answer = "High";
break;
}
  // Only change code above this line
  return answer;
}
 sequentialSizes(1);


//5 

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case "bob":
    answer = "Marley";
    break;
  case 42 :
    answer = "The Answer"; break;
 case 1:
    answer = "There is no #1"; break;
  case 99: 
    answer = "Missed me by this much!"; break;
 case 7: 
    answer = "Ate Nine"; break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);


//6

function isLess(a, b) {
  return a < b
 }
 
 isLess(10, 15);

 //7 

 function abTest(a, b) {
 
  if (a<0 || b<0)
  return undefined
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  abTest(2,2);

// 8 


let count = 0;
function cc(card) {
  
switch(card) {
case 2: 
case 3:
case 4:
case 5:
case 6:
count++;
break;
case 10: 
case 'J':
case 'Q':
case 'K':
case 'A':
count--;
break;
}

let holdbet = "Hold"
if (count >0) {holdbet = "Bet"}

return count + " " + holdbet;

}


cc(2); cc(3); cc(7); cc('K'); cc('A');


//9 

let myDog1 = {
name: "Dog",
tails: 1,
legs: 4,
friends: ["people", "another dogs"]
}


// 10

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat     
const shirtValue = testObj.shirt  


// 11

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"]  
const drinkValue = testObj["the drink"]   



// 0903 1  


const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16;  
const player = testObj[playerNumber];  

console.log(player);



// 2

const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder"
myDog["name"] = "Happy Coder"
console.log(myDog.name)

//3 

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof"

myDog["bark"] = "woof"

console.log(myDog)

// 4

delete myDog.tails

// 5

  
function phoneticLookup(val) {
  let result = "";

 const lookup = {
    "alpha": "Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
     "delta":"Denver",
     
     "echo":"Easy",
      
     "foxtrot":"Frank",
  };
result = lookup[val]
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"))



// 6 

  function checkObj(obj, checkProp) {
  if(obj.hasOwnProperty(checkProp))
  return obj[checkProp];
    // Only change code below this line
  return "Not Found";
    // Only change code above this line
  }

  

  // 7 
  const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
  
   {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "youtube",
        "TV"
      ],
  
   }
    
  ];



  // 8 


  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"]
  
  console.log(gloveBoxContents)


  //9 

  const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];
  console.log(secondTree)


  //10


// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//11 while
const myArray = [];
let i = 5;
while(i >= 0){
    myArray.push(i);
    i--;

 // 543210

const myArray2 = [];
let i = 5;
while(i){
    myArray.push(i);
    i--;

// 54321


//12 for

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
// ourArray теперь будет иметь значение [0, 1, 2, 3, 4].

const myArray = [];
for (let i=1; i < 6; i++) 
{
  myArray.push(i)
}

//13

const myArray = [];

for ( let i=1; i<10; i+=2) {
  myArray.push(i)
}

// myArrayдолжно равняться [1, 3, 5, 7, 9].

//14 

const myArray = [];
for( let i = 9; i>0; i-=2 ) {
  myArray.push(i);
}

// myArrayдолжно равняться [9, 7, 5, 3, 1].


//15 

const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
total+= myArr[i]
}