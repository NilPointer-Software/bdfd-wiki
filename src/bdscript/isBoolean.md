# $isBoolean
Returns whether or not the provided 'text' is a boolean.
> 🧙‍♂️ 'true' means the text is a boolean, 'false' means it isn't.

### Supported Booleans
Positive |  Negative 
-------- | --------
true | false
yes | no
on | off
enable | disable

## Usage
```
$isBoolean[text]
```

### Parameters
- `text` `(Type : String || Flag : Emptiable)` : The text to check.

## Example
```
$nomention
$isBoolean[$message]
```

![example](https://user-images.githubusercontent.com/69215413/126853488-21cc74f2-358b-4c07-97af-9c7e3346101c.png)
