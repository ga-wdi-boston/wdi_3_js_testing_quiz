describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    expect(arrayWithoutZero).toEqual([3,2,1,4]);
    expect(arrayWithoutZero).not.toEqual(0);
    expect(arrayWithoutZero.length).toEqual(4);
  });
});

describe('countOdd', function(){

  it('should count the odd numbers in array', function(){
    var inputArray = [3, 2, 1, 4, 0];
    // at this point the array should not have any element containing 0
    expect(countOdds(inputArray)).toEqual(2);
  });

  it('should count in empty array', function(){
    var inputArray = [];
    // at this point the array should not have any element containing 0
    expect(countOdds(inputArray)).toEqual(0);
  });

  it('should be able to handle the case of negative numbers', function(){
    expect(countOdds([-1, -3])).toBe(0);
  });

  it('should be able to handle the case of no odd numbers', function(){
    expect(countOdds([2, 4, 6, 8])).toBe(0);
  });
});
