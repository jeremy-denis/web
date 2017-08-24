# web/angular-theme
Angular theme directive.
The angular-theme directive allow you to change dynamically the css of your website

 
## Usage

### Element directive

```html
 <angular-theme themes="ctrl.object"></angular-theme>
```

### attributes available

themes : a json array key value where :
 * key match to the name of the template 
 * value match to the path to the css file 

#### themes object sample

```json
 [
	"theme1":"pathToTheFirstTheme",
	"theme2":"pathToTheSecondTheme",
 ]
```

## License
Licensed under the MIT license.
