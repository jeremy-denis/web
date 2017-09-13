# web/progress-time
An angular 4 typescript component to manage and display progress bar.

The main functionalities are the following :
 * display progress time 
 * throw event progressEnded at the end of the time

## Usage

### Element directive

```html
 <progress-time></progress-time>
```

### attributes available

 * id (non mandatory) : the if of the element
 * label (non mandatory) : the label display before the progress time
 * maxTime : the time associated to the progress bar
 * noControl : if true control will not be displayed around the component
 * autoStart : if true the progress bar will start automatically

## License
Licensed under the MIT license.
