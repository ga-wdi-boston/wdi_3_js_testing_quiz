// describe('Question 2', function(){

//   it('should strip zeroes from arrays', function(){

//     var inputArray = [3, 2, 1, 4, 0];
//     var arrayWithoutZero = inputArray.remove(function(e){ return e !== 0;

//     });

//     // at this point the array should not have any element containing 0
//     expect(arrayWithoutZero(inputArray)).toEqual([3,2,1,4]);

//   });

// });

describe("countOdds", function() {

  var numbers = [1];

it('should return the count for number of times an odd number appears', function () {

  expect(countOdds(numbers)).toBe(1);


  });

it('should return the count with an empty array', function() {
  var empty = [];

  expect(countOdds(empty)).toBe(0);
  });

  var negative = [-1];
it('should return the count with a negative number in array', function() {

  expect(countOdds(negative)).toBe(0);

  });
});
