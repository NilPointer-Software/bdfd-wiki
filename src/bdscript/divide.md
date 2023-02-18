# $divide
Divides the provided numbers.

## Usage
```
$divide[numbers]
```

### Parameters
- `numbers` `(Type: Integer,(Big)Float|| Flag: Required)`: The numbers to divide. Separate numbers using `;`.

## Example
```
$nomention
$argsCheck[>2;❌ Please provide the needed arguments! Usage: `!divide (number1) (number2)`]
Answer: $divide[$message[1];$message[2]]
```

![example](https://user-images.githubusercontent.com/69215413/125975569-bfda8ef1-40f8-4e47-b3d7-340e3b4c1048.png)
