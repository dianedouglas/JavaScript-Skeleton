# _My JavaScript Starter Kit_

#### _Skeleton for JavaScript projects with asset pipeline built in Gulp with dependencies managed by Npm and Bower. Includes development server, jQuery and Bootstrap. Also includes build tasks for SASS or basic CSS, and tests with mocha/chai. Automatically deploy to GitHub Pages when you build and make a gh-pages branch._

#### By Diane Douglas

## Description

After putting together the new version of the Epicodus JavaScript curriculum including an introduction to Gulp, Npm, and Bower I wanted to put together a skeleton project to use on my own. This came in handy for whipping up quick classroom examples and starting projects with web APIs.

* A specs folder is included for Test Driven Development with mocha/chai. No dependencies needed, just run `specs/spec-runner.html` in your browser, including object prototype declaration files in it as script tags as shown with `js/basic.js`. Then write specs in `specs/specs.js`.
* The project includes a Gulp file with watchers to automatically browserify, concatenate and minify all JavaScript files and run a development server.
* It also concatenates CSS and compiles SASS (or both), automatically reloading the browser on changes. 
* It automatically pulls in front end dependencies managed by Bower. The `bower.json` file is included with jQuery and Bootstrap.
* Backend dependencies are managed by Npm, and a package.json file is included. 
* The orihect lets you start in immediately with an `index.html` file which includes a small form for user input.
* User input from the form is taken from the HTML in a frontend JavaScript file and passed to a method coming from a backend JavaScript file which holds an exported object prototype declaration.
* The method simply returns the input unchanged so that it can be printed to the screen with jQuery establishing that all files are connected up correctly with all dependencies included.
* For cleanliness, a .gitignore file is included with standard files, and this README can be used as a template for a new one.
* By running `gulp build` or `gulp build --prod` to minimize, then pushing changes to a gh-pages branch you can automatically deploy to GitHub Pages.
* For debugging, run `gulp jshint` to run the linter.
* Other assets such as images, fonts and external JavaScript or CSS files that are not managed by bower can be linked to directly in the `index.html` file and stored in `build/assets`. They will not be overwritten by `gulp build`, but everything in the `build/css` and `build/js` folders will be deleted with each build.

## Setup and Use

Dependencies:

* Make sure you have node installed globally. [Node can be installed here](https://nodejs.org/en/download/). 
* Then you can install Gulp and Bower globally with Npm: `npm install gulp bower -g`. If you have permissions issues, you may need to run `sudo npm install gulp bower -g` instead. 
* You'll need SASS installed if you want to use the gulp tasks for compiling. Uncomment the `pullStyles` task labelled for SASS and comment out the version of the `pullStyles` task labelled for CSS only in `gulpfile.js` and then follow the instructions below to install SASS. Include all CSS or SASS files in the `styles` folder.

Run the project:

1. Clone this repository. From the command line, change directory into the top level of this folder.
2. Install local dependencies with: `npm install && bower install`.
3. Build the project with `gulp build`.
4. Serve the project on the development server with `gulp serve`.
5. Deploy by building and pushing changes to a `gh-pages` branch.

If everything works correctly, you can enter a value into the form and then see it displayed when you submit the form along with a message that says "get started". If this works, that means that jQuery was correctly included by bower and you'll also notice standard Bootstrap formatting. You'll see some colors on the page to indicate your styles are being added too. Ready to start prototyping your new project!

## Installing Sass

Official SASS documentation can be found [here](http://sass-lang.com/guide). 

First, install Ruby: 

* Windows users, there is an [installer](http://rubyinstaller.org/).

* Mac users can install Ruby using [homebrew](http://brew.sh/) like this:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

* Finally, Mac and Windows users install SASS from the command line:

```
gem install sass
```

If you get permissions errors, use sudo:

```
sudo gem install sass
```

* Linux users: Install [Ruby](https://www.ruby-lang.org/en/downloads/) and then enter this:

```
sudo su -c "gem install sass"
```


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