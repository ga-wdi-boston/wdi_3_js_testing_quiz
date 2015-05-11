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

});
