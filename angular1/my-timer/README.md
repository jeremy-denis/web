# web/my-timer
Angular Timer component.
The my-timer component allow you to manipulate the time in a very easy way.

The main functionalities are the following :
 * possibilities to have a number timer
 * select the duratio between to step
 * choose the min max value of the timer
 * choose if you want to have a timer in one sens or another

## Usage

### Component

```html
 <my-timer></my-timer>
```

### attributes available

duration : the duration before an incrementation of the value in the timer
min      : the minimum value to start the timer
max      : the maximum value of the timer. When the value is reach the timer is stop
step     : the value that will be add to the timer at each step
desc     : if the desc attributes is equal to true it will doing a reversing timer from the max to the minuimum value

#### duration sample 

```html
 <my-timer duration="500"></my-timer>
```

#### min/max sample

```html
 <my-timer min="5" max="10"></my-timer>
```

### event launch

The component launch some event on the rootScope which can be recover : 

timerStop : event send when the timer is stop

## License
Licensed under the MIT license.
