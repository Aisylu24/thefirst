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
    if  (new Date().toDateString() === date.toDateString()) { 
    return true
    }
    else return false 
    }
    
    