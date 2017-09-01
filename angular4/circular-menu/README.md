# web/circlular-menu
Circlular Menu component can simulate a circular fap button.
The circle-menu component purpose a dynamic circular menu with event launch when item is click.
 
## Usage

### Preriquisis

import the menu in your app module file

```js
	import { CircularMenuComponent } from './circular-menu/ts/circular-menu.component';
```

add the class in the declarations part of your app module

```js
	 declarations: [
		.
		.
		.
		CircularMenuComponent,
		.
		.
    ]
```

### Element directive

```html
	<circular-menu [opened]="true" [items]="this.items"></circular-menu>
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
