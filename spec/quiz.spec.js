describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0 });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero()).toEqual("[3, 2, 1, 4]")

  });

});

// Question 3 tests

describe('Question 3', function(){
  it("should count odd numbers", function(){
    var countArray = [1, 2, 3, 4, 5];

    expect(countOdds(countArray)).toBe(1, 3, 5);
      });

  it("should not return anything if all numbers are even", function() {
    var inputArray = [2, 4, 6, 8];

    expect(countOdds(inputArray)).toBe("");
  });
});
