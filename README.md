# dammit [![Build Status](https://secure.travis-ci.org/furzeface/dammit.png?branch=master)](http://travis-ci.org/furzeface/dammit)

> Returns a random curse phrase. Use within tasks in failing scenarios.

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

## Examples

```js
var dammit = require('dammit');

dammit(); // 'gosh darn it'
```

## Development
Link for local development:

```sh
$ npm link
```

Add phrases to `lib/curses.json`

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).

```
$ grunt test
```

Commit messages loosely adhere to [these guidelines](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit).

Versioning adheres to [Semver](http://semver.org).

## License

Copyright (c) 2014 Daniel Furze  
Licensed under the MIT license.
