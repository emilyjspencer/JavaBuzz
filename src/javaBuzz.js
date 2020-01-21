
// declare class - not quite a class but just for comparison purpose atm I'll call it a class
var Javabuzz = function() {};

// define the method

Javabuzz.prototype.isDivisibleByThree = function(number) {  // this refers to the number passed in as an arg 
  
  //return true; harcoded true - will cause the next test to fail
  return (number % 3 == 0) // will return true if divisible by 3 otherwise will return false 

};

Javabuzz.prototype.isDivisibleByFive = function(number) {

  return (number % 5 == 0)
};

