// Question 2.
//
// In the quiz.spec.js file, there is a test case with an
// assertion that does not match the comments. Rewrite the
// assertion so that it does what the comments say.



describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(inputArray.question2()).toEqual(3,2,1,4);

  });

});


