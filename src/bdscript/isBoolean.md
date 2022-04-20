# $isBoolean
Returns whether or not the provided 'text' is a boolean. 'true' means the text is a boolean, 'false' means it isn't.

## Usage
```php
$isBoolean[text]
```

| text | The text to check. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Supported Booleans
Positive |  Negative 
:----- | :-----
true | false
yes | no
on | off
enable | disable

## Example
```
$nomention
$isBoolean[$message]
```
![](https://user-images.githubusercontent.com/69215413/126853488-21cc74f2-358b-4c07-97af-9c7e3346101c.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*