'use strict';

var postcss = require('postcss');
var emojify = require('./emojify');
var selectorParser = require('postcss-selector-parser');

var replaceSelectors = function (selectors) {
    selectors.eachInside(function (selector) {
        if ( selector.type === 'attribute' ||
            selector.type === 'class' ||
            selector.type === 'tag' ||
            selector.type === 'id') {
            selector.value = emojify(selector.value);
        }
    });
};

module.exports = postcss.plugin('postcss-emoji', function () {
    return function (css) {
        css.walkRules(function (rule) {
            rule.selector = selectorParser(replaceSelectors)
                .process(rule.selector).result;
        });
    };
});
