describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).toEqual([3,2,1,4]);

  });

  it('should take array of even numbers and return 0', function(){
    var testArray = [0,2,4,6,8];
    expect(countOdds(testArray)).toBe(0);
  });

  it('should not break if NaN is supplied', function(){
    var testArray = [1,3,5,NaN,4,2,5,6,'test'];
    expect(countOdds(testArray)).toBe(4);
  })




});
