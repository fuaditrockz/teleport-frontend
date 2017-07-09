# Teleport Starterkit

This gulp starterkit provides a prepared development environment based on [gulp](https://github.com/gulpjs/gulp), less and [webpack](https://github.com/webpack/webpack). The internal data flow is handled with  [Reflux](https://github.com/spoike/refluxjs) and the routing is managed with the [React-Router](https://github.com/rackt/react-router).

## Get the kit

```
$ git clone https://github.com/fuaditrockz/teleport-frontend.git && cd teleport-frontend
```

## Installation

Install all dependencies. 

```
$ npm install
```


## Development

Builds the application and starts a webserver with livereload. By default the webserver starts at port 1337.
You can define a port with `$ gulp --port 3333`.

```
$ npm start
```

## Build

Builds a minified version of the application in the dist folder.

```
$ gulp build --type production
```

## Testing

We use [jest](http://facebook.github.io/jest/) to test our application.<br />
You can run the tests that are defined under [app/scripts/\_\_tests__](./app/scripts/__tests__) with

```
$ npm test

```

## Javascript

Javascript entry file: `app/scripts/main.js` <br />

**Reflux**

We are using Reflux, which is an implemantion of the [Flux Architecture](http://facebook.github.io/flux/docs/overview.html). If you want to read more about Reflux, check out the readme of the [reflux git repo](https://github.com/spoike/refluxjs). 

**React-Router**

The routing is done with the [react-router](https://github.com/rackt/react-router). It's especially great for SPA's. We would recommend to read the [guide](https://github.com/rackt/react-router/blob/master/docs/guides/overview.md) to get an overview of the router features.

**ES6 with babel**

We are working with the webpack [babel loader](https://github.com/babel/babel-loader) in order to load our .js/.jsx files. Babel allows you to use ES6 features like class, arrow functions and [much more](https://babeljs.io/docs/compare/).



## CSS

CSS entry file: `app/less/main.less`<br />
And you can find the core style on the file `app/style/**`.


## Webpack Hints

You can find the webpack configuration in the [webpack.config.js file](./webpack.config.js).
We use the babel-loader in order to load .jsx and .js files via webpack. If it's possible install all your dependencies with NPM. Packages installed with NPM can be used like this:

```language-javascript

var moduleXYZ = require('moduleXYZ');

```
You can find all loaders in this [list](http://webpack.github.io/docs/list-of-loaders.html).


###Requirements
* node
* npm
* gulp# teleport-frontend
