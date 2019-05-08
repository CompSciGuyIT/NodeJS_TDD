var expect = require('chai').expect;

before('root setup code', function(){
    console.log('Root Setup Code');
});

after('root teardown code', function(){
    console.log('Root Teardown Code');
});

beforeEach('root setup code for each test', function(){
    console.log('Root Setup Code for each test');
});

afterEach('root teardown code for each test', function(){
    console.log('Root Teardown Code for each test');
});

describe('test_suite5', function(){

    it('test1', function(){
        console.log('test1');
        expect(true).to.equal(true);
    });
});