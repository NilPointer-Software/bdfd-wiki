# $random[]
Returns a random number between 'minimum' and 'maximum'.

> 📌 `$random[]` never returns the 'maximum' value, as it's right side exclusive range. Basically, to get a random number between 1 and 10; you'd put 11 as the 'maximum' instead of 10 i.e `$random[1;11]`.

## Syntax
```
$random[minimum;maximum]
````

### Parameters 
- `minimum` `(Type: Integer, Float || Flag: Required)`: The minimum value.
- `maximum` `(Type: Integer, Float || Flag: Required)`: The maximum value.

## Example
```
$nomention
🎲 You rolled `$random[1;7]`!
```
![example](https://user-images.githubusercontent.com/69215413/123555172-0d939d00-d752-11eb-9d30-975bf6e8e99f.png)
