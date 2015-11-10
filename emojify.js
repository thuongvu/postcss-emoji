'use strict';

var emojiArr = require('./emojis');
var i = 0;
var existingRules = {};

var generateEmoji = function(selector) {
    if (!existingRules[selector]) {
        existingRules[selector]  = emojiArr[i];
        if (i !== emojiArr.length) {
        	i++
        } else {
        	i = 0;
        }
    }
    return existingRules[selector];
}

module.exports = generateEmoji;
