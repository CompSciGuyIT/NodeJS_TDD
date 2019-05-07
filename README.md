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

Notes:
	You can install packages globally using:
		$ npm i -g <package_name>
	But best practice dictates you should just install modules locally in the project

	For modules that are used in production use the --save-prod flag instead of --save-dev
