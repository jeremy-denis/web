# web/angular-form
Angular form component take an object and generate a form to manipulate the object

The main functionalities are the following :
 * possibilities to have a basic form with text field

## Usage

### Element directive

```html
 <angular-form></angular-formr>
```
 * for each attributes object it will generate an input with the key as name of the input
 * If the attributes is an array it will generate a select

### attributes available

object : the object pass to the directive to generate the form

#### form usage sample by passing an object

```html
 <angular-form object="ctrl.obj"></my-timer>
```

## License
Licensed under the MIT license.
