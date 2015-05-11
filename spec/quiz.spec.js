 describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0

    // solutions: any of these would be good, the first is best
    expect(arrayWithoutZero).not.toContain(0);
    expect(arrayWithoutZero.length).toBe(4);
    expect(arrayWithoutZero).toEqual([3, 2, 1, 4]);
  });
});

describe('countOdds', function(){
  it('should count the odds correctly', function(){
    expect(countOdds[1, 2, 3])).toBe(2);
  });

  it('should handle the case where there are no odd numbers', function(){
    expect(countOdds([2, 4, 6])).toBe(0);
  });

  it('should handle the case of the empty array', function(){
    expect(countOdds([])).toBe(0);
  });
});

// decision points suggest we should check for empty list
// and for no odd numbers; if those are covered we're good
