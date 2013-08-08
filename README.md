# Generator-hoodie
[![Build Status](https://secure.travis-ci.org/ro-ka/generator-hoodie.png?branch=master)](https://travis-ci.org/ro-ka/generator-hoodie)

A yeoman generator for hoodie apps.

## Getting started
- Make sure you have [yo](https://github.com/yeoman/yo) installed:
    `npm install -g yo`
- Install the generator: `npm install -g generator-hoodie`
- Run: `yo hoodie`

## Usage
After you scaffolded your project, you'll recognize a lot of folders and files in your project folder. Per default, hoodie serves files from a `www` folder, but that does not exist. Why you ask? Because we use [grunt](http://gruntjs.com) for development and it takes care of serving the files for our project!

### Develop
- Run `grunt server`. This will start hoodie in the background and open up a browser tab, serving files from `http://localhost:9000` per default. Now grunt takes care of compiling the `jade` and `stylus` files, will reload the tab on changes in our code and so on.

**Note**: At the moment, the `hoodie start` in the background opens a tab, too. This one will give you an error, as the mentioned `www` folder is not present. Use the tab opened by grunt (`http://localhost:9000`) instead.

### Deploy
- When the hoodie app is ready for prime time, run `grunt build`. This will minimize and concat all the js, css, optimize images and so on. All these production ready files end up in the `www` folder.
- Copy the `www` folder and the `package.json` to your server.
- Run `npm install` in the project folder on your server to get all the dependencies (namely hoodie).
- Start your app by calling `hoodie start` in the project folder on your server.

Now hoodie should be running on some port it'll tell you in the command line. If you didn't see which one, check the `data/stack.json` file which contains the ports for your hoodie app, the admin console and the couchdb.

## License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)
