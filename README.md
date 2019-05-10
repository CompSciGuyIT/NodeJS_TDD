# NodeJS_TDD
Work done in the 'Unit Testing and Test Driven Development in NodeJS' course by Richard Wells

# Installing Mocha and Chai
Command line used:

	$ npm init -y
	$ npm i --save-dev mocha
	$ npm i --save-dev chai

Had errors installing Mocha fixed by giving ownership to npm:

	$ sudo chown -R $USER:$GROUP ~/.npm
	$ sudo chown -R $USER:$GROUP ~/.config

# Notes
You can install packages globally using:
	
		$ npm i -g <package_name>
		
But best practice dictates you should just install modules locally in the project

For modules that are used in production use the --save-prod flag instead of --save-dev


# Mocha test runners in Visual Studio Code
Once Mocha is installed, it will look for a 'test' folder to run the tests from.

Click on the test beaker on the side or go to: 

	View > Open View... > Test

# Running Mocha from the command line 
While in the project's root directory, type:

	$ ./node_modules/mocha/bin/mocha 

This will run all the written tests located in files in the 'test' directory

Other named directories must be specified:

	$ ./node_modules/mocha/bin/mocha tests

Targeting specific files:

	$ ./node_modules/mocha/bin/mocha tests/test2.js

Using globs to target all files that end with 1:

	$ ./node_modules/mocha/bin/mocha tests/*1.js

Using the glob flag to target all files with 2 in the name:

	$ ./node_modules/mocha/bin/mocha -g 2 tests

# Assert statements with the Chai Assert Library
* Chai is a javascript assertion library that can be run in both NodeJS and in a browser  
* It implements an API for specifying "expectations" that follow Behaviour Driven Development (BDD) style testing  
* Also provides and API for the more classical unit testing style of asserts  
* The BDD API provides a set of test calls that can be chained together to create an expectation that can be read as natural language.  i.e. _expect(result).to.equal(1)_  
* Many of the expressions that Chai validates pass or fail depend on whether the expression is _Truthy_ or _Falsy_  
* There are only six values that are _Falsy_: false, 0, empty string, null, undefined, and NaN.  
* All other values are _Truthy_  
---
### Assert API
```
it('assert_example', function(){
	assert(false, "Assert fail!");
 });
 ```  
* Basic call with expression and message parameters  
* The expression parameter is tested for _Truthiness_ and if it passes, the assert passes  
* When the assert fails, the specified massage is included in the failure output  

```
it("assert types", function(){
	assert.isTrue(true, "true");  
	assert.isNaN(1.1, "NaN");  
	assert.exists(foo, "!Exists");  
	assert.isArray(obj, "!Array");
 });
 ```  
* Almost all API calls take one of two forms:
	1. Expression to evaluate, with an optional failure message  
	2. Actual value compared with an expected value, with an optional failure message  
	
Other examples:  
```
assert.equal(actual, expected);  
assert.isString(actual, expected);  
assert.property(object, propName);  
assert.throws(function);  
```

Complete API is definied at http://www.chaijs.com/api/assert  

---
### BDD Style Asserts
```
var expect = require('chai').expect;  
var should = require('chai').should;  

it('likes BDD!', function(){
	var result = productionCall();
	expect(result).to.equal(true);
	result.should.equal(true);
});
```
* This API allows you to chain additional calls to create a natural language representation of the expected behaviour  
* The **expect** call is added as a reference to your script and is passed in a value to test  
* The **should** is called by your script and adds a _should_ property to _Object.prototype_  
  
Chai provides a set of chainable getter methods for creating natural language assertions  
  ```
  to, be, been, is, that, which, has, have, with, at, of, same, but, does  
  ```
For example, these two assertions are equivalent:  
  `expect(result).to.equal(1);`  
  `expect(result).to.be.that.which.is.equal(1);`  
  
Other examples:  
```
expect(result).to.be.true;
expect(result).to.be.instanceof(a);
expect(badFn).to.throw();
```

Complete API defined at http://www.chaijs.com/api/bdd  

# Testing Asynchronous Code
* Asynchronous calls return immediately and continue to run in the background  
* They generally notify the caller that they have completed their work either via a _**callback function**_, a Javascript _**promise**_, or the new _**async/await**_ Javascript keywords  
* Examples of asynchronous calls are:  
	1. Timers (i.e. setTimeout)  
	2. HTTP requests (i.e. http.get)  
	3. Database operations  
---
### Async Testing of Callbacks  
```
function myAsyncFunction(callback){
	setTimeout(function(){
		callback("blah");
	}, 50);
}

it('callback test', function(done){
	myAsyncFunction(function(str){
		expect(str).to.equal("blah");
		done();
	});
});
```
* To test asynchronous code with callbacks, pass a _done_ parameter to your test  
* This _done_ parameter is a callback function provided by Mocha  
* Mocha will not complete the test until the _done_ callback has been called  
---
### Async Testing with Promises  
```
function promiseFunc(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("blah");}, 50);
	});
}

it("promise test", function(){
	return promiseFunc().then(res => {
		expect(res).to.equal("blah");
	});
});
```
* To test asynchronous code with promises, you simply return the promise from your test  
* Mocha delays the test until the promise is resolved  
---
### Asynch Testing with Async/Await  
```
function promiseFunc(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("blah");}, 50);
	});
}

it("await test", async () => {
	var res = await promiseFunc();
	expect(res).to.equal("blah");
});
```
* To test with the async/await keywords, specify _async_ on your unit test  
* Inside your test, you then call _await_ on the asynchronous function that you're testing  
* Yout unit test will return a promise which Mocha will wait to be resolved
