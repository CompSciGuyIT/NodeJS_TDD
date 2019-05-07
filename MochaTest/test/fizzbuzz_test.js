var expect = require('chai').expect;

// Passes 'Can call fizzBuzz' test
// function fizzBuzz(value){
//     ;
// }

// Passes 'Returns 1 with 1 passed in' test
// function fizzBuzz(value){
//     return '1';
// }

// function fizzBuzz(value){
//     return value.toString();
// }

// Refactored to get Fizz
// and later again to get Buzz
// and later again to get FizzBuzz
function fizzBuzz(value){
    if (value%3 == 0){
        if (value%5 == 0)
            return 'FizzBuzz';
        return 'Fizz';
    }

    if (value%5 == 0)
        return 'Buzz';
    return value.toString();
}

function checkFizzBuzz(testValue, expectedResult){
    var result = fizzBuzz(testValue);
    expect(result).to.equal(expectedResult);
}

// Basic test template
it('expects true', function(){
    expect(true).to.equal(true);
});

// Duplicated in the next test case so it is removed
// it('Can call fizzBuzz', function(){
//     fizzBuzz(1);
// });

// The structure of the next two tests is duplicated
// Refactor into a simple utility function that can be used by the tests
// it('Returns 1 with 1 passed in', function(){
//     var result = fizzBuzz(1);
//     expect(result).to.equal('1');
// });

// Make this test pass by generalising the production code
// Often in TDD you'll implement functionality in a very specific way in one test case
// and then generalise it in other test cases
// it('Returns 2 with 2 passed in', function(){
//     var result = fizzBuzz(2);
//     expect(result).to.equal('2');
// });

// Refactored with utility function
it('Returns 1 with 1 passed in', function(){
    checkFizzBuzz(1, '1');
});

it('Returns 2 with 2 passed in', function(){
    checkFizzBuzz(2, '2');
});

it('Returns Fizz with 3 passed in', function(){
    checkFizzBuzz(3, 'Fizz');
});

it('Returns Buzz with 5 passed in', function(){
    checkFizzBuzz(5, 'Buzz');
});

it('Returns FizzBuzz with 15 passed in', function(){
    checkFizzBuzz(15, 'FizzBuzz');
});