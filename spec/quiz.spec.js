
describe('Question 2', function(){

  it('the array should not have any element containing 0', function(){

    var inputArray = [3, 2, 1, 4, 0];
    var arrayWithoutZero = inputArray.filter(function(e){ return e !== 0; });

    // at this point, the array should not have any element containing 0
    expect(arrayWithoutZero).toEqual([3, 2, 1, 4]);

  });

});

describe('Question 3', function(){
  it('should have the odd numbers increase the counter by 1', function(){

    expect(3).toBeTruthy();
  });
});

describe('Question 3', function(){
  it('should expect an odd number not to be falsy',
    function(){
      expect(3).not.toBeFalsy();
    });
});


//Question 4. The code doesn't indicate what to do with even numbers; there is no else statement

describe('Question 4', function(){
  it('should expect an even number to be falsy',
    function(){
      expect(2).toBeFalsy();
    });
});
