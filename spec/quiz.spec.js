describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).toEqual([3, 2, 1, 4]);

  });

});


describe('Question 3', function() {
  it("should return the total of odd numbers", function() {
    expect(countOdds(7,9)).toEqual(2);

  });

  it("should return 0 when used on an even number", function() {
    expect(countOdds(0,2,4,6)).toEqual(0);
  });



});
