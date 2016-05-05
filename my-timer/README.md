# web/my-timer
Angular directive 

The main functionalities are the following :
 * possibilities to have a number timer

## Usage

### Element directive

```html
 <my-timer></my-timer>
```

### attributes available

duration : the duration before an incrementation of the value in the timer
min      : the minimum value to start the timer
max      : the maximum value of the timer. When the value is reach the timer is stop

#### duration sample 

```html
 <my-timer duration="500"></my-timer>
```

#### min/max sample

```html
 <my-timer min="5" max="10"></my-timer>
```

## License
Licensed under the MIT license.
