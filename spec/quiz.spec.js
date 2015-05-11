describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).toEqual([3,2,1,4]);

  });

// Question 4: Here I test if the number % 2 === 0, then
// the result should be 0, as count is not incremented.
  it('should take array of even numbers and return 0', function(){
    var testArray = [-3,0,2,4,6,8];
    expect(countOdds(testArray)).toBe(0);
  });

  //  Here I check whether other items are supplied instead of integers
  it('should not break if NaN is supplied', function(){
    var testArray = [1,3,5,NaN,4,{a: [0,2,3,]},5,6,'test',7.5];
    expect(countOdds(testArray)).toBe(4);
  })

//if the array is empty, it should return 0
  it('should return 0 if empty array is passed', function(){
    var testArray = [];
    expect(countOdds(testArray)).toBe(0);
  })

  it('should return invalid entry if more args passed', function(){
    var testArray1 = [0,2,4,6];
    var testArray2 = [1,3,5,7];
    expect(countOdds(testArray1,testArray2)).toBe(0);
  })



});
