# web/angular-presentation
Angular Presentation directive.
The angular-presentation directive allow you to display slide on a json object

The main functionalities are the following :
 * display a presentation based on an object 
 * choose the number of slide to display
 
## Usage

### Element directive

```html
 <angular-presentation presentation="ctrl.object"></angular-presentation>
```

### attributes available

presentation : object that contain the presentation 

### presentation object

The directive take in parameter an object that match to the presentation.
There are two concepts around the object : 
 * the presentation : the object itself  
 * the slide : an object that contain a list of string
 

#### presentation object sample

```json
 {
	"displayNumber":"2",
	"slides":[
		{
		 "name":"slide1",
		 "values":["value1","value2","value3"]
		},
		{
		 "name":"slide2",
		 "values":["value1","value2","value3"]
		},
		{
		 "name":"slide3",
		 "values":["value1","value2","value3"]
		},
		{
		 "name":"slide4",
		 "values":["value1","value2","value3"]
		}
	]
 }
```

#### presentation object attribute
 
 * displayNumber : the number of slide to display by default
 * slides        : an array that contain the different slide object 

## License
Licensed under the MIT license.
