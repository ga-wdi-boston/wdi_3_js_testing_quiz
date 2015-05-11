describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).not.toEqual(0);

  });

});

describe("countOdds", function() {
  it("should increase the count, every time an odd number is passed through", function(){
      expect(countOdds(1,2,3,4,5,6)).toBe(3);
  });
  it("should not increase the count, when an even number is passed", function(){
    expect(countOdds(2,4,6,8)).toBe(0);
  })
});
