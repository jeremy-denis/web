# web/angular-form
Angular directive that create a slide menu that move with some action

The main functionalities are the following :
 * for the moment move left when click on the menu

## Usage

### Element directive

```html
 <my-angular-slide-menu>your menu content</my-angular-slide-menu>
```

### how to include 

be carefull there are a js file and a css file to include to have the property work fine

```html
    <link rel="stylesheet" type="text/css" href="{PathToTheDirective}my-angular-slide-menu/js/my-angular-slide-menu.css">
    <script src="{PathToTheDirective}my-angular-slide-menu/js/my-angular-slide-menu.js"></script>
```

### attributes available

 * animated : a boolean that apply the class when equal to true
 * class : if you want to apply your own class to the element you can used this attributes

###sample to used

```html
	<input type="checkbox" ng-model="$scope.flag"/>
	<my-angular-slide-menu animated="$scope.flag">panel</my-angular-slide-menu>
```

## License
Licensed under the MIT license.
