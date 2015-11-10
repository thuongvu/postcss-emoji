# PostCSS Emoji [![Build Status][ci-img]][ci]

[PostCSS] plugin that converts CSS selectors into emojis.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/thuongvu/postcss-emoji.svg
[ci]:      https://travis-ci.org/thuongvu/postcss-emoji

## Motivation
While the use case of converting all CSS selectors to emojis isn’t quite useful, I was inspired by a [post on Hacker News](https://news.ycombinator.com/item?id=10395008) in which the author worked on an iteration of the Google homepage where they abbreviated CSS class names to 1-3 letters to decrease page weight.  I wonder if they would’ve considered emoji Unicode class names, as .👌may be more memorable than .xmw.

## Output

```css
/* Before */

.widget {
	transition: 1s;
}
.tool {
	color: orange;
}
.widget.tool {
	transition: 1s;
}
.tool:first-child {
	color: blue;
}
```

```css
/* After */

.🎬 {
	transition: 1s;
}
.🎭 {
	color: orange;
}
.🎬.🎭 {
	transition: 1s;
}
.🎭:first-child {
	color: blue;
}
```

## Usage

```js
postcss([ require('postcss-emoji') ])
```

See [PostCSS] docs for examples for your environment.
