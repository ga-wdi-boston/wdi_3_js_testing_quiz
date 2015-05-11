describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(inputArray).toEqual(3, 2, 1, 4);

  });

});


describe('Question 3', function(){

  it('Should count the odd numbers', function(){
    expect(countOdds(1, 2, 3, 4, 5)).toBe(3);
  });


  it('Should make a string of the odd numbers', function(){
    expect(countOdds(1, 2, 4, 5)).toContain(1, 5);
  });

  it('If the string it empty it should return 0', function(){
    expect(countOdds('')).toBe(0);
  })

});
