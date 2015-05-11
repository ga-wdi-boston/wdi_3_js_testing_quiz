describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).toEqual([3, 2, 1, 4]);

  });

});


describe('countOdds', function() {
  it('should return the count of odd numbers in set of numbers', function() {
    expect(countOdds([1, 2, 3, 4, 5])).toBe(3);
  });

  it('should return 0 if there are no odd numbers', function() {
    expect(countOdds([2, 4, 6])).toBe(0);
  })

});
