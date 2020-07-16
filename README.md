# React Circle 

Practice some state change and prop drilling.

## Set Up

`npm install` and `npm start` you all know the drill

### Directions 
Yo, I want you to be able to change this circle's appearance through its state.
Make some methods that set the property of whatever you want in the state.

## Files

### App
Your main file, contains the circle's state, and renders the various properties I want you to change.

## Components

### The Circle

Renders the circle svg.
You really don't need to touch this...

### ColorPicker

This component render the color buttons.
Pass some props (I'd recommend the setCircleFill method...)
On the click of a button, get a color value and set the fill color of the circle.

### SizeSettings

For this component, pass in the correct props (radius is a good choice from state, maybe the setRadius method too...)
This component comes with an input, that's pretty neat.
Add an event (probably onChange...) so that the input's value changes the circle's radius.

### StrokeSettings

I want this component to change the outline of the circle. 
You get to figure out how to make the stroke width increase as you push the `+` button and decrease when the `-` button is pushed.
Use the methods, or don't whatever.
Pass in the appropriate props and update the state.

### Bonus 

Now do it with Hooks




