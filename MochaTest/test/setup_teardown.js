var expect = require('chai').expect;

describe('test_suite4', function(){
    before('setup code', function(){
        console.log('Setup Code');
    });

    after('teardown code', function(){
        console.log('Teardown Code');
    });

    beforeEach('setup code for each test', function(){
        console.log('Setup Code for each test');
    });

    afterEach('teardown code for each test', function(){
        console.log('Teardown Code for each test');
    });

    it('test1', function(){
        console.log('test1');
        expect(true).to.equal(true);
    });

    it('test2', function(){
        console.log('test2');
        expect(true).to.equal(true);
    });
});