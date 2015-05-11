describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).toEqual([3,2,1,4]);

  });

});

describe('Question 3', function(){
  it('0 should not count as odd', function(){
    expect(countOdds([0])).toBe(0);
  });
  it('should return 0 when passed nothing', function(){
    expect(countOdds([])).toBe(0);
  });
  it('should not count evens', function(){
    expect(countOdds([2,4,6,8])).toBe(0);
  });
  it('should count odds', function(){
    expect(countOdds([1,2,3,4,5,0])).toBe(3);
  });
  it('should count negative odds', function(){
    expect(countOdds([1,2,3,-1,-3,-2])).toBe(4);
  });
});


//Question 4.
// I mean... I've got all the edge cases I can think of. Fails on negative numbers.
