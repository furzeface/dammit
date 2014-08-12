/*
 * dammit
 * https://github.com/furzeface/dammit
 *
 * Copyright (c) 2014 Daniel Furze
 * Licensed under the MIT license.
 */

'use strict';

var curses = require('../src/curses.json');
var uniqueRandom = require('unique-random')(0, curses.length - 1);

module.exports = function () {
	return curses[uniqueRandom()];
};

module.exports.curses = curses;
