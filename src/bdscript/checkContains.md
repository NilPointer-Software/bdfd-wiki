# $checkContains
Checks if the 'text' contains at least one of the provided 'phrases'.

## Usage
```
$checkContains[text;phrases]
```

### Parameters
- `text` `(Type : String || Flag : Emptiable)` : The text that will be checked.
- `phrases` `(Type : String || Flag : Emptiable)` : The phrases/words the bot will check for in 'text'. Separate phrases using `;`.

## Example
```
$nomention
$checkContains[$message;hi;hello]
```

![example](https://user-images.githubusercontent.com/69215413/120049460-0741c200-bfe8-11eb-9dc7-3a584af2381e.png)
