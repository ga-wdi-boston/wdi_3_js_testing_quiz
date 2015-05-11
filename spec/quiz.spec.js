// QUESTION 1:
//
// Assertion - You're declaring, or laying out, that something should be true.
//
// Black Box Testing - It's how you test code to see that the functions/outcomes
// are what you expect, without going line-by-line to check the code.
//
// QUESTION 2:

describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    describe('Javascript arithmetic', function(){
      it('should add correctly', function(){
        expect(0).toBe(0);
      });

    });

    // at this point the array should not have any element containing 0
    expect().toEqual();

  });

});
