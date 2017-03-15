# Imagelint JS
[![Build Status](https://travis-ci.org/imagelint/imagelint-js.svg?branch=master)](https://travis-ci.org/imagelint/imagelint-js)
[![codecov](https://codecov.io/gh/imagelint/imagelint-js/branch/master/graph/badge.svg)](https://codecov.io/gh/imagelint/imagelint-js)

A library to convert your image URLs to Imagelint URLs

## Installation

You can add this library to your project using npm

    npm install imagelint --save

## Usage

### Basic usage

```js
imagelint.get('http://yoursite.com/img/cat.jpg')
```

The code above yields the output below:

    https://a1.imagelint.com/yoursite.com/img/cat.jpg

### You can also use parameters

```js
imagelint.get('http://yoursite.com/img/cat.jpg', {'width': 200})
```

The code above scales the image to a width of 200px.
