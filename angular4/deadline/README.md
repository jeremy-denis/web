# web/deadline-line
An angular 4 typescript component based on moment js that show an element that degradated with time.

The main functionalities are the following :
 * display a line that degradated with time

## Prerequisis

have moment.js install

## Usage

### Element directive

```html
 <deadline-line></deadline-line>
```

### attributes available

 * obj : an object that should contain three columns : name, date and rules
  ** name : the name of the object display in the component
  ** date : expiration date of the object 
  
 * rules : an array that contain the rules of displaying if the object
	Each rules should have the following column
	* class : the class apply if the rule is validated
	* day : the day of difference with the object date 
		** positive = day after the expiration date
		** negative = day before the expiration date
	* apply : more, less or equal the rule that will be validated by the element
	
/!\ rules can be ordered the last rule validated is the one used by the component
  
### rules sample 


```json
[
	{'class' :'darkred', 'day' : 7, 'apply':'more'},
	{'class' :'red', 'day' : 7, 'apply':'less'},
	{'class' :'orange', 'day' : 0, 'apply':'equal'},
	{'class' :'yellow', 'day' : -7,'apply':'more'},
	{'class' :'darkgreen', 'day' : -30,'apply':'more'}, 
	{'class' :'green', 'day' : -90,'apply':'more'},
	{'class' :'white', 'day' : -90,'apply':'less'},
]
```

## License
Licensed under the MIT license.
