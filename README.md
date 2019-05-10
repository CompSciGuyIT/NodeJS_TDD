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
