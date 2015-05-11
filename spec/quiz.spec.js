describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect().toEqual();

  });

});

describe('countOdds', function(){
  it ('should count the odds in numbers',{
    function(){
      var a = 3;
      var getOdd = (a%2===0)
      expect(3).toBe(getOdd)
    }
  });
});
