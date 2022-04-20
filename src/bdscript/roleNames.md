# $roleNames
Returns the name of every role in the current server.

## Usage
```php
$roleNames
```

## Example
```
$nomention
$description[Server Roles: $roleNames]
```
![](https://user-images.githubusercontent.com/69215413/125832346-7f0914e3-64c3-435e-8438-6f216c0e5fbf.png)

> 🧠 **Tip:** To remove *@everyone* from `$roleNames`, use `$replaceText[$roleNames;@everyone;]`.