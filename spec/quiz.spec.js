describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).toEqual([3,2,1,4]);

  });

});

describe("countOdds", function(){
  it("should count the number of odd numbers", function(){
    var array = [1,2,3,4];
    expect(countOdds(array)).toBe(2);
  })
})
