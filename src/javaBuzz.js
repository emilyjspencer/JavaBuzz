
// declare class - not quite a class but just for comparison purpose atm I'll call it a class
var Javabuzz = function() {};

// define the method

Javabuzz.prototype.isDivisibleByThree = function(number) {
  //return true; harcoded true - will cause the next test to fail
  return (number % 3 == 0); // will return true if divisible by 3 otherwise will return false 
};
