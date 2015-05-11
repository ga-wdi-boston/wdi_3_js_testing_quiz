describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(inputArray.arrayWithoutZero).not.toEqual(0);

  });

});


//Question 3

describe('Question 3', function(){
  it('should return the number of odds in an array', function(){
    var inputArray = [1, 2, 3, 4, 5];
    expect(inputArray.countOdds).toBe(3);
  });
  it('should not return a higher count than there are numbers in the array', function(){
    var inputArrayTwo = [1, 3, 5, 7, 9];
    expect(inputArrayTwo.length)isEqual(5);
  });
});
