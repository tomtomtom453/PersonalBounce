# bounce
Simple demonstration of how you can setup a JavaScript library
## Synopsis

A small library that can make a an element of your choosing bounce

## Code Example

The easiest way to use bounce is putting it in a variable and calling the init function on it. It will than target the element with class bounce on it
```javascript
//Initialize the first object without params so the default values are used
var bounce = Bounce();
bounce.init();
```

If you want however you can use a custom selector and change the gravity and the update speed using a settings object
```javascript
//Initialize the second object with a different selector and a gravity of only to so it goes...much...slower
var bounce2 = Bounce();
bounce2.init('.bounce2', {gravity: 2, updateSpeed:2});
```

## Demo
See bounce [demo](http://i874261.iris.fhict.nl/s4/bounce/demo)

## Motivation

This library was created as a small example on how you can create a library

## Installation

Just download bounce.js, put it in the head of your page and call it. Make sure the parent of the targeted element has a hight otherwise there's not much room to bounce

## API Reference

### init

| Parameters    | Type          | Optional | Description                                                |
|:-------------:|:-------------:|:--------:| ---------------------------------------------------------- |
| selector      | string        | true     | Css selector that targets the element that needs to bounce |
| settings      | object        | true     | Object containing settings `gravity` and/or `updateSpeed`  |