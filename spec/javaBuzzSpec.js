
 describe('Javabuzz', function() {

  var javabuzz;
  
  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      javabuzz = new Javabuzz(); // set up - new instance
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
});

