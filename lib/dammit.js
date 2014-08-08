/*
 * dammit
 * https://github.com/furzeface/dammit
 *
 * Copyright (c) 2014 Daniel Furze
 * Licensed under the MIT license.
 */

'use strict';

var words = require('../src/curses.json');
var uniqueRandom = require('unique-random')(0, words.length - 1);

module.exports = function () {
	return words[uniqueRandom()];
};

module.exports.words = words;
