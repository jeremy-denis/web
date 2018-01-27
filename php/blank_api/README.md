# php/blank

********DOCUMENTATION IN PROGRESS**********

PHP blank api is a project to have a generic reusable api in native PHP
 
## Usage

### Preriquisis

import the generic class in your database class

```php
	include_once './generic.php';
```

extend the Generic class

```php
extends Generic 
```

create a constructor with a db parameter
in the below code replace the ${dbTableName} by the true database name in your database
```php
public function __construct($db){
	parent::__construct($db, ${dbTableName});
}
```

## License
Licensed under the MIT license.
