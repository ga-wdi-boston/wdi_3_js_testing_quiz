describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).not.toContain(0);

  });

});


describe('question 3', function(){

  it('should count = 0 if no numbers', function(){
    expect(countOdds([])).toBe(0);
  })

  it('should count = 4 with only numbers ', function(){
    expect(countOdds([5,7,9,11])).toBe(4);
  })

  it('should count = 0 with only even numbers', function(){
    expect(countOdds([4,6,8,10,12])).toBe(0);
  })

});
