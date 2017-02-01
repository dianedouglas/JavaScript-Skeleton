# _My JavaScript Starter Kit_

#### _Skeleton for JavaScript projects with asset pipeline built in Gulp with dependencies managed by Npm and Bower. Includes development server, jQuery and Bootstrap._

#### By Diane Douglas

## Description

After putting together the new version of the Epicodus JavaScript curriculum including an introduction to Gulp, Npm, and Bower I wanted to put together a scaffolding project to use on my own. This came in handy for whipping up quick classroom examples and starting projects with web APIs.

* It includes a Gulp file with watchers to automatically browserify, concatenate and minify all JavaScript files and run a development server.
* It also concatenates CSS and compiles SASS. 
* It automatically pulls in front end dependencies managed by Bower and includes a bower.json file. 
* Backend dependencies are managed by Npm, and a package.json file is included. 
* It lets you start in immediately with an `index.html` file which includes a small form for user input.
* User input from the form is taken from the HTML in a frontend JavaScript file and passed to a method coming from a backend JavaScript file which holds an exported object prototype declaration.
* The method simply returns the input unchanged so that it can be printed to the screen with jQuery establishing that all files are connected up correctly with all dependencies included.
* For cleanliness, a .gitignore file is included with standard files, and this README can be used as a template for a new one.

## Setup and Use

Dependencies:

* Make sure you have node installed globally. [Node can be installed here](https://nodejs.org/en/download/). 
* Then you can install Gulp and Bower globally with Npm: `npm install gulp bower -g`. If you have permissions issues, you may need to run `sudo npm install gulp bower -g` instead. 
* If you plan to use SASS, you'll have to install that globally too. 

Run the project:

1. Clone this repository. From the command line, change directory into the top level of this folder.
2. Install local dependencies with: `npm install && bower install`.
3. Build the project with `gulp build`.
4. Serve the project on the development server with `gulp serve`.

If everything works correctly, you can enter a value into the form and then see it displayed when you submit the form along with a message that says "get started". If this works, that means that jQuery was correctly included and you'll also notice standard Bootstrap formatting. Ready to start prototyping your new project!

## Support and contact details

Please feel free to fork this repository and submit pull requests back. You can also contact me here:

* Email: diane.douglas1@gmail.com
* My Website: [www.MelodicCode.com](http://www.melodiccode.com)

## Technologies Used

* JavaScript
* Node, Npm
* Gulp
* Bower

**By Diane Douglas**