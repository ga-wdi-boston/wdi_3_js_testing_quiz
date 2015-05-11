describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).toEqual([3, 2, 1, 4]);

  });

});


describe('question 3', function(){
// the if statement is a decision point that will yield different code paths on each loop depending if the given number being iterated over is even or odd. this mixed array tests both code paths.
  it('should count the odds', function(){
      var oddArray = [0, 1, 2, 3, 4, 5];
      expect(countOdds(oddArray)).toEqual(3);
  });

//for loop is a decision point, it will have different code paths for emtpy array (ie no looping occurs), vs an array with values in it.
  it('should consider empty arrays', function(){
      var blankArray = [];
      expect(countOdds(blankArray)).toEqual(0);
  });

// test array wtih length of 1, just for good measure make it a gigantic value to see if expression has any limitations.
  it('should consider arrays with only one huge value', function(){
      var justOne = [9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999998];
      expect(countOdds(justOne)).toEqual(0);
  });

});
