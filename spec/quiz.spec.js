describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).not.toContain(0);

  });

});

describe('Question 3', function(){

  it('should take multiple inputs', function(){
    var input = [1, 2, 3, 4, 5, 6, 7];
    expect(countOdds(input)).toBe(4);
  })

  it('should take single inputs', function(){
    var input = [1];
    expect(countOdds(input)).toBe(1);
  });

  it('should take empty input', function(){
    var input = [];
    expect(countOdds(input)).toBe(0);
  });

});


