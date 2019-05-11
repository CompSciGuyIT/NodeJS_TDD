var expect = require('chai').expect;

function myAsyncFunc(callback){
    setTimeout(function(){
        callback("blah");
    }, 50);
}

function myPromiseFunc(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("blah");
        }, 50);
    });
}

/****** Callback Tests ******/

// Neglected to specify the Mocha callback in the unit test parameters
// Also specified the incorrect value in the test
// Test will NOT fail because the expect call is happening AFTER the test is completed
it("passing fail callback test", function(){
    myAsyncFunc(function(str){
        expect(str).to.equal("doh");
    });
});

// Mocha 'done' callback specified in test parameters
// To be called when the test has completed the expectation
it("failing callback test", function(done){
    myAsyncFunc(function(str){
        expect(str).to.equal("doh");
        done();
    });
});

// Test updated to pass
it("passing callback test", function(done){
    myAsyncFunc(function(str){
        expect(str).to.equal("blah");
        done();
    });
});

/****** Promise Test ******/

// Test that verifies a function that returns a promise when the timout executes
// This causes Mocha to wait for that promise to be resolved before the test completes
it("passing promise test", function(){
    return myPromiseFunc().then(function(res){
        expect(res).to.equal("blah");
    });
});

/****** Promise Test using async/await ******/

// This test specifies that the test function itself is async 
// This causes Javascript to automatically return a promise from that function
// The promise will resolve once the await call has returned and the function has completed
it("passing asaync/await promise test", async function(){
    var result = await myPromiseFunc();
    expect(result).to.equal("blah");
});