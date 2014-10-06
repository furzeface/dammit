# dammit
[![NPM](https://nodei.co/npm/dammit.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/dammit/)

> Returns a random curse phrase. Use within tasks in failing scenarios. Go crazy with NSFW mode if you like.

## Getting Started

Install the module with: 

```sh
$ npm install dammit
```

Install with cli command:

```sh
$ npm install -g dammit
$ dammit --help
$ dammit --version
```

Use on the cli (pass in NSFW if you want):
```sh
$ dammit
$ dammit NSFW
```

## Examples
```js
var dammit = require('dammit');

dammit(); // 'Gosh darn it!'
dammit({'NSFW': true}); // '**** ***'
```

* * *

## Contributing [![Build Status](https://travis-ci.org/furzeface/dammit.svg?branch=master)](https://travis-ci.org/furzeface/dammit) [![Stories in Ready](https://badge.waffle.io/furzeface/dammit.svg?label=ready&title=Ready)](https://waffle.io/furzeface/dammit)

[![dependency Status](https://david-dm.org/furzeface/dammit/status.svg)](https://david-dm.org/furzeface/dammit#info=dependencies)
[![devDependency Status](https://david-dm.org/furzeface/dammit/dev-status.svg)](https://david-dm.org/furzeface/dammit#info=devDependencies)

###To contribute
```sh
$ git clone https://github.com/furzeface/dammit && cd dammit
$ git checkout develop
```

### Development
Link for local development:

```sh
$ npm link
```

Add phrases to `src/curses.json` or `src/cursesNSFW.json` if you're feeling naughty.
Then check the [Waffle board](https://waffle.io/furzeface/dammit) or [GitHub issues](https://github.com/furzeface/dammit/issues) and work away!

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).

```
$ grunt test
```

### Tips
* Install [editorconfig-sublime](https://github.com/sindresorhus/editorconfig-sublime) for Sublime Text to help with consistent code formatting.
* Commit messages loosely adhere to [these guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).
* Versioning adheres to [Semver](http://semver.org).

* * *

## Release History
- 2014-08-13 v0.5.0 - Added NSFW Mode.
- 2014-08-13 v0.3.0
- 2014-08-13 v0.2.0 
- 2014-08-11 v0.1.0 - Initial release. 

Release with [grunt-bump](https://github.com/vojtajina/grunt-bump).

## License
Copyright (c) 2014 Daniel Furze. Licensed under the MIT license: http://danielfurze.mit-license.org
