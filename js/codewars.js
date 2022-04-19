// Convert a Number to a String!
  
function numberToString(num) {
    return (num).toString(); 
      
    }


 // Find the Remainder

<<<<<<< HEAD
 function remainder(n, m){
    if(n > m){
      return n % m
    }  else {
      return m % n
    }
    }
=======

>>>>>>> 0f2b244404025e5c1ce21c65ed735ed6b0ed2c5f


// Pirates!! Are the Cannons ready!??

const cannonsReady = (gunners) => {
  if (Object.values(gunners).includes('nay')) {
    return "Shiver me timbers!"   } 
  else { 
 return 'Fire!'
       } 
}

// For Twins: 2. Math operations
 
function iceBrickVolume(radius, bottleLength, rimLength) {
  return Math.trunc((bottleLength-rimLength) * radius * Math.sqrt(2) * radius * Math.sqrt(2));


// List Filtering

function filter_list(l) {
  return l.filter(element => typeof element === "number")
 }


 // Powers of 2

 function powersOfTwo(n){ 
  let res = []
for (i=0; i<=n; i++) { 
  res.push(Math.pow(2,i))
}
return res
}


//String repeat

function repeatStr (n, s) {
  let res = '';
  for (i = 0; i < n; i++) {
    res += s;
          }
  return res;}


  //  Hello, Name or World!

  function hello(name){
    if (name){
      return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
      return "Hello, World!";
    }
  }


  // USD => CNY

  function usdcny(usd) {
    return (usd*6.75).toFixed(2) + ' Chinese Yuan'
      
    }

 // Difference of Volumes of Cuboids
 
 
 function findDifference(a, b) {
  return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
  
  }


  // Is the date today

  function isToday(date) {
    return new Date().toDateString() === date.toDateString();
  }
    

  //


  function smash (words) {

    return words.join(" ")
 };



 // Filter out the geese

 function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
return birds.filter( el => !geese.includes(el));

};

//Double Char

function doubleChar(str) {
  let res ="";
  for (let i = 0; i < str.length; i++) {
   res += str[i] + str[i];
  }
  return res
  }
  
  //


  function isPalindrome(x) {
    let rev = x.toLowerCase().split("").reverse().join("");
    return x.toLowerCase() === rev;
  }} 


  // Find Maximum and Minimum Values of a List


  var min = function(list){
    return  Math.min.apply(null, list)
         
    }
    
    var max = function(list){
    return Math.max.apply(null, list)
    }
    


// Returning Strings

function greet(name){
  let greet = "Hello, " + name + " how are you doing today?"
  return greet
    
  }


  // Count Odd Numbers below n

  function oddCount(n){

    return Math.floor(n / 2)
  
    }


   // Area of a Square

   function squareArea(A){
    let r= (4 * A)/ (2 * Math.PI)
    let res = Math.pow(r, 2);
    return Math.round(res*100)/100
  }

  
    const squareArea = A => Number(((2 * A / 3.1416)**2).toFixed(2))



    // What is between?
    function between(a, b) {

      function between(a, b) {
       let arr = [];
       
       for (let i = a; i <= b; i++) {
       
         arr.push(i);
       }
       
       return arr;
     }
     
     }

// varitaion 2
     function between(a, b) {  
      const betweenArray = []
      
      while (a <= b) {
        betweenArray.push(a);
        a++;
      }
      
      return betweenArray; }


 // Pillars
 
 function pillars(num, dist, width) {
  if (num == 1) 
  return 0
    else if (num>1) 
  return ((num -2) * width) + ( (num -1) * (dist*100))
  }


// Sum of positive
  function positiveSum(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
       if(arr[i] > 0) {
        sum += arr[i];
      }
     }
    return sum;
    }
    


  // Enumerable Magic #25 - Take the First N Elements
  
  function take(arr, n) {
    return arr.slice(0, n)
      // Your code here
    }

   console.log(take([0, 1, 2, 3, 5, 8, 13], 3))


   //Is it even?

   function testEven(n) {
    if (n%2 == 0)
    return true
    else return false
        //Your awesome code here!
    }



    // Semi-Optional
    function wrap(value) {
      return {value}
    
    }


//Define a card suit
// my
function defineSuit(card) {
  if (card.includes('♣')) {
    return "clubs";
  }
  else if (card.includes('♦')) {
    return "diamonds";
  }
  else if (card.includes('♥')) {
    return "hearts";
  }
  else if (card.includes('♠')) {
    return "spades";
  }
};

// smart
    function defineSuit(card) {

      var suit = card.substr(-1);
      switch(suit){
      case '♣': return 'clubs';
      case '♦': return 'diamonds';
      case '♥': return 'hearts';
      default: return 'spades';
      }
      };


    // Sum The Strings
    function sumStr(a,b) {
      return String(Number(a)+Number(b))
        
      }


      // Hex to Decimal

      const hexToDec = hexString => parseInt(hexString, 16)


      // Exclamation marks series #1: Remove an exclamation mark from the end of string


      function remove(s) {
        if (s[s.length - 1] === "!") {
            return s.slice(0, s.length - 1);
        } else {
            return s
        }
    }
      


    //Heads and Legs


    function animals(heads, legs){
      let cow = (legs - heads * 2) / 2;
      let chicken = heads - (legs - heads * 2) / 2;
      if (chicken < 0 || cow < 0 || Math.round(chicken) != chicken || Math.round(cow) != cow){
        return "No solutions";
      }else{
        return [chicken, cow];
      }
    }



    // Area or Perimeter

    const areaOrPerimeter = function(l , w) {
      if (l == w)
      return l*w
      else return (l+w)*2
        // Return your answer
      };


  //  Area or Perimeter 2
  
  const areaOrPerimeter = (l , w) => l === w ? l*w : 2*(l+w);


  // 

  String.prototype.toAlternatingCase = function () {
    let str = '';
      for(let i = 0; i< this.length; i++){
        if (this[i] == this[i].toLowerCase()){ 
          str += this[i].toUpperCase();
        } else {
          str += this[i].toLowerCase();
        }
      }
      return str;
    }



    //


    function lovefunc(flower1, flower2){
      if ((flower1+flower2)%2 == 0)
     return false
     else return true
                
       // moment of truth
     }



// Volume of a Cuboid


class Kata {
  static getVolumeOfCuboid(l, w, h) {
return l*w*h
    // your code here
  }
}


// Add new item (collections are passed by reference)

function addExtra( listOfNumbers ){
  // your code here
  // add an int to listOfNumbers and return it
  return [...listOfNumbers, 13];
}

//

function addExtra(listOfNumbers) {
  return listOfNumbers.concat(0)
}


// Sum of Multiples
function sumMul(n, m) {
  if (m <= n) return "INVALID";
  const l = m - (m % n || n);
  return (n + l) / 2 * l / n;
}



// Reversed Words
function reverseWords(str) {
  return str.split(' ').reverse().join(' ')}


// To square(root) or not to square(root)

  function squareOrSquareRoot(array) {
    return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e*e);  
  }