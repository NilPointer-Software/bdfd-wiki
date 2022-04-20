# $repeatMessage
Repeats the provided text a certain amount of times.

## Usage
```php
$repeatMessage[howMany;text]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| howMany | How many times to repeat the text. **\*** | [Integer](/src/resources/arguments/types.md#integer) | [Required](/src/resources/arguments/flags.md#required)
| text | The text to repeat. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

**\*** `howMany` must be between 0 and 10. However, `$repeatMessage[]` can be nested in other `$repeatMessage[]`s (e.i. `$repeatMessage[5;$repeatMessage[5;Hi! ]]` would repeat "Hi!" 25 times).

## Examples
### Example #1
```
$nomention
$repeatMessage[5;Hello World!]
```
![](https://user-images.githubusercontent.com/69215413/126245014-85c3953b-ad54-4658-95df-fb83719dcfa0.png)

### Example #2
> 🧠 **Tip:** You can use a space at the end of 'text', so there are spaces in between repetitions.

```
$nomention
$repeatMessage[5;Hello World! ]
```
![](https://user-images.githubusercontent.com/69215413/126245000-6bac6c11-39d2-40ec-a6d3-0d8123c6a2fd.png)
