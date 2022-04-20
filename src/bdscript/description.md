# $description
Adds a description to the embed.

## Usage
```php
$description[text;(embedIndex)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| text | The text to set the description as. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| embedIndex | The embed index, default is `1`. [(learn more)](/src/resources/embedIndexes.md) | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

## Example
```
$nomention
$description[This is a description! 😎]
```
![](https://user-images.githubusercontent.com/69215413/125975247-34376dd7-faa1-4426-a774-59294a3962c0.png)