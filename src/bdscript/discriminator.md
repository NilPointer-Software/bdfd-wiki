# $discriminator
Returns a user's discriminator (the four-digit number at the end of their username).

## Usage
```php
$discriminator[userID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The user to get the discriminator of. **\*** | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

**\*** When no `userID` is provided in the `[]` of `$discriminator`, the author's disriminator is returned (e.g. `$discriminator[]`). 

## Example
```
$nomention
Hello $username#$discriminator[]!
```
![](https://user-images.githubusercontent.com/69215413/123010488-b5911b00-d38c-11eb-8aeb-a7453c3687c6.png)

> 🧠 **Tip:** A username and discriminator, separated by a #, put together is called a user tag.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*