# $numberSeparator
Separates the thousands in a number.

## Syntax
```
$numberSeparator[Number;(Separator)]
```

### Parameters 
- `Number` `(Type: Integer || Flag: Required)`: The number to apply the separator to.
- `Separator` `(Type: String || Flag: Vacantable)`: The separator between each thousand. The default is `,`.

## Example
```
$nomention
$numberSeparator[5000]
```

![image](https://user-images.githubusercontent.com/69215413/126918009-8f4ba7d1-875b-43da-a24b-5126464996b9.png)
