# web/deadline-line
An angular 4 typescript component based on moment js that show an element that degradated with time.

The main functionalities are the following :
 * display a line that degradated with time

## Prerequisis

have moment.js install

## class with time

 * 'red' : (dayDiff > 0 && dayDiff < 7),
 * 'orange' : (dayDiff == 0),
 * 'yellow' : (dayDiff < 0 && dayDiff >= -7),
 * 'darkgreen' : (dayDiff < -7 && dayDiff >= -30),
 * 'green' : (dayDif < -30 && dayDiff > -90),
 * 'white' : (dayDiff < -90),'darkred' : (dayDiff > 7),
 * 'grey' : (obj.date == undefined || checked)}"

## Usage

### Element directive

```html
 <deadline-line></deadline-line>
```

### attributes available

 * object : an object that should contain name and date column to be displayed in the component

## License
Licensed under the MIT license.
