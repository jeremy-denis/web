# web/circle-menu
Circle Menu component. Can simulate fap button.
The circle-menu component purpose a dynamic circular menu with event launch when item is click.
 
## Usage

### Preriquisis

include js and css of the component

```html
    <link rel="stylesheet" href="{PATHTOMODULE}/circle-menu/css/circle-menu.js"/>
    <script src="{PATHTOMODULE}/circle-menu/js/circle-menu.js"></script>
```

include the module in your project (often app.js)

```js
	angular.module('MyApplication', ['CircleMenu'])
```

### Element directive

```html
	<circle-menu opened="$ctrl.opened" items="$ctrl.items"></circle-menu>
```

### attributes available

 * opened : a flag to control the opening of the menu
 * items  : object that represent an item of the menu
  ** icon  : the icon to display in the menu item
  ** event : the event launch when the item is clicked 

#### items object sample

```json
 [
	{icon:'ion-trash-b', event:'deleteOne'},
	{icon:'ion-edit', event:'editOne'}
 ]
```

## License
Licensed under the MIT license.
