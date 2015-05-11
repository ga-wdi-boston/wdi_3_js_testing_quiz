describe('Question 2', function(){

  it('should strip zeroes from arrays', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point the array should not have any element containing 0
    expect(arrayWithoutZero).toEqual([3,2,1,4]);

  });

});


//Question 3: black box test
describe('Question 3', function(){

  // Checking with normal array
  var numbersArray = [1,2,3,4,5];
  it('should return a count of odd numbers', function(){
    expect(countOdds(numbersArray)).toBe(3);
  })

  // Checking with empty array
  var numbersArrayTwo = [];
  it('should return a count of odd numbers', function(){
    expect(countOdds(numbersArrayTwo)).toBe(0);
  })

});



// Question 4: more edge case tests
describe('Question 4', function(){

  // Checking with array that has only one value
  var numbersArrayThree = [1];
  it('should return a count of odd numbers', function(){
    expect(countOdds(numbersArrayThree)).toBe(1);
  })

  // Checking with array that has no odd numbers
  var numbersArrayFour = [2,4,6,8];
  it('should return a count of odd numbers', function(){
    expect(countOdds(numbersArrayFour)).toBe(0);
  })

  // Checking with array that has a couple strings in it
  var numbersArrayFive = [1,3,"five",2,4,"seven",6,8];
  it('should return a count of odd numbers', function(){
    expect(countOdds(numbersArrayFive)).toBe(2);
  })
});
