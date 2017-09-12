# web/card-map
A component to display a map of element in different cards.
EAch card represent a button you can tap to launch an event and treat in in another place in the application

## Usage

### Preriquisis

import the component in your app module file

```js
	import { CardMapComponent } from './card-map/ts/card-map.component';
```

add the class in the declarations part of your app module

```js
	 declarations: [
		.
		.
		.
		CardMapComponent,
		.
		.
    ]
```

### Element directive

```html
	<card-map [active]="0" [len]="3"></card-map>
```

### attributes available

 * active : the number of the active map
 * len  : the number of card in the map

## License
Licensed under the MIT license.
