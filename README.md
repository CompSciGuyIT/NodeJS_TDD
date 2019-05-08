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

./node_modules/mocha/bin/mocha 

This will run all the written tests located in files in the 'test' directory

Other named directories must be specified:

./node_modules/mocha/bin/mocha tests

Targeting specific files:

./node_modules/mocha/bin/mocha tests/test2.js

Using globs to target all files that end with 1:

./node_modules/mocha/bin/mocha tests/*1.js

Using the glob flag to target all files with 2 in the name:

./node_modules/mocha/bin/mocha -g 2 tests
