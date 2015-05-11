// Quiz: Testing with Jasmine

// Question 1.  In your own words, define the following:
// (Write them in comments so that the rest of the code will still run)
//
// assertion
//
// An assertion is also known as an expectation. It is a condition that we are saying should be true. The test runner will check the expected value against the result and alert us of any failed tests.
// black-box testing
// Black box testing means that we don't particularly care or know about the internals of the functions. We just put values in and expect correct values out.

// Question 2.
//
// In the quiz.spec.js file, there is a test case with an
// assertion that does not match the comments. Rewrite the
// assertion so that it does what the comments say.

// Question 3. Given the following code:

function countOdds (numbers) {
    var i;
    var count = 0;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] %2 === 1) {
            count++;
        }
    }
    return count;
}

// Write two black-box tests for this code. (Remember, tests
// go in the .spec.js file.)

// Question 4. Consider the decision points and code paths
// in countOdds. If you have covered them all with your
// answer to question 3, write a comment in the .spec.js
// file indicating this. Otherwise, write a third test that
// improves the code test coverage.
