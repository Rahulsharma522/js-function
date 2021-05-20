// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation


  /**
   * Adds one to a given number.
   * @param {number} n
   * @return {number}
   */
    //Function Decleration
 function addingone (n) {
    return (++n);
}


// Function Expression
var addingone = function (n) {
   return n;
}

//  Arrow Function Without Curly Bracket
var addingone =(n)
     return n; 
    
// Arrow Function With Curly Bracket
   var addingone =(n) => {
   return n;
}
  /**
   * Subtracts one from a given number.
  
 * @param {number} n
 * @return {number}
 */
//Function Decleration
function param(number) {
    return --number;
  }
  // Function Expression
  var param = function(n) {
    return --n;
  }
  //Arrow Function Without Curly Braces
  var param = (n) => --n;
  //Arrow Function With Curly Braces
  var param = (n) => {
    return --n;
  }
   
  
  /**
   * Adds two numbers.
   * @param {number} x
   * @param {number} y
   * @return {number} the sum
   */
  //Function Decleration
  function param(x,y) {
    return (x+y);
  }
  // Function Expression
  var param = function(x,y) {
    return (x+y)
  }
  //Arrow Function Without Curly Braces
  var param = (x,y) => x+y;
  //Arrow Function With Curly Braces
  var param = (x,y) => {
    return (x+y);
  }
  // Function Invocation
    param(1,2)
  /**
   * Subtracts the second number from the first.
   * @param {number} x
   * @param {number} y
   * @return {number} the difference
   */
    //Function Decleration
   function param(x,y) {
    return (x-y);
  }
  // Function Expression
   var param = function(x,y){
       return (x-y)
   }
   // Arrow Function Without Curly Braces
   var param =(x,y) => x-y;
//Arrow Function With Curly Braces
  var param = (x,y) => {
       return (x-y);
  }
  // Function Invocation
   param(5,4)
  /**
   * Multiplies two numbers.
   * @param {number} x
   * @param {number} y
   * @return {number} the product
   */
   //Function Decleration
  function param(x,y) {
    return (x*y);
  }
  // Function Expression
  var param = function(x,y) {
    return (x*y);
  }
  //Arrow Function Without Curly Braces
  var param = (x,y) => (x*y);
  //Arrow Function With Curly Braces
  var param = (x,y) => {
    return (x*y);
  }
  // Function Invocation
  param(8,9)
  /**
   * Divides the first number by the second.
   * @param {number} x
   * @param {number} y
   * @return {number} the quotient
   */
  //Function Decleration
 function param(x,y) {
    return (x/y);
  }
  // Function Expression
  var param = function(x,y) {
    return (x/y);
  }
  //Arrow Function Without Curly Braces
  var param = (x,y) => (x/y);
  //Arrow Function Wih Curly Braces
  var param = (x,y) => {
    return (x/y);
  }
  // Function Invocation
  param(4,2)
  /**
    * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
//Function Decleration
function param(x) {
    return (x**2);
   }
  // Function Expression
  var param = function(x){
    return (x**2);
  } 
  //Arrow Function Without Curly Braces
  var param = (x) => x**2;
  //Arrow Function Wih Curly Braces
  var param = (x) => {
    return (x**2);
  }
  // Function Invocation
  param(2)
    /**
   * Performs a mathematical operation on two numbers.
   * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
   * @param {string} operation "add", "subtract", "multiply", or "divide"
   * @param {number} x
   * @param {number} y
   * @return {number} the result
   */
   //Function Decleration
  function param (x,y,operation) {
    if(operation=="+") {
      return (x+y);
    }
    else if(operation=="-") {
      return (x-y);
    }
    else if(operation=="*") {
      return (x*y);
    }
    else if(operation=="/") {
      return (x/y);
    }
  }

  // Function Expression
var param = function(x,y,operation) {
    if(operation=="+") {
      return (x+y);
    }
    else if(operation=="-") {
      return (x-y);
    }
    else if(operation=="*") {
      return (x*y);
    }
    else if(operation=="/") {
      return (x/y);
    }
  
  }
  
  //Arrow Function With Curly Braces
 var param = (x,y,operation) => {
    if(operation=="+") {
      return (x+y);
    }
    else if(operation=="-") {
      return (x-y);
    }
    else if(operation=="*") {
      return (x*y);
    }
    else if(operation=="/") {
      return (x/y);
    }
     
  }
  
  /**
   * Returns true if `a` is greater than `b`.
   * @param {number} a
   * @param {number} b
   * @return {boolean} `a` is larger than `b`
   */
   //Function Decleration
 function greaterthen(a,b){
    if (a > b){
     return (true)
    }
  }

  // Function Expression
var greaterthen = function(a,b) {
    if (a > b) {
      return(true)
    }
  
  }
  //Arrow Function With Curly Braces
  var greaterthen = (a,b) => {
    if (a > b) {
      return(true)
    }
  
  }
  // Function Invocation
  greaterthen(5,4)

  /**
   * Returns true if `a` is less than `b`.
   * @param {number} a
   * @param {number} b
   * @return {boolean} `a` is smaller than `b`
   */
   //Function Decleration
 function greaterthen(a,b){
    if (a < b){
     return (true)
    }
  }
  /**
   * Returns true if `a` and `b` are equal.
   * @param {number} a
   * @param {number} b
   * @return {boolean} the numbers are equal
   */
   function param(a,b) {
    if (a < b) {
      return true;
    }
  }
  /**
   * Returns the smallest value of two numbers.
   * @param {number} x
   * @param {number} y
   * @return {number} the smallest number
   */
  
  /**
   * Returns the largest value of two numbers.
   * @param {number} x
   * @param {number} y
   * @return {number} the largest number
   */
  
  /**
   * Returns true if `n` is even.
   * @param {number} n
   * @return {boolean} the number is even
   */
  
  /**
   * Returns true if `n` is odd.
   * @param {number} n
   * @return {boolean} the number is odd
   */
  
  /**
   * Returns a letter grade.
   * "A": 90-100%
   * "B": 80-89%
   * "C": 70-79%
   * "D": 60-69%
   * "F": 0-59%
   * @param {number} score
   * @param {number} total maximum possible score
   * @return {string} the score represented as a letter grade
   */
  
  /**
   * Joins two strings with a space.
   * @param {string} word1
   * @param {string} word2
   * @return {string} joined the words joined with a space
   */