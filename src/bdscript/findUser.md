# $findUser
Finds a user's ID in the current server using username, tag, ID, or mention.

## Usage
```php
$findUser[user;(fallbackAuthorID)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| user | The user's username, ID, or mention to find. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| fallbackAuthorID | Whether to return the author ID if no user was found. **\*** | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** `fallbackAuthorID` is false by default.

## Example
```
$nomention
$findUser[$message]
```
![](https://user-images.githubusercontent.com/69215413/125977542-dbb250bd-d91d-4fdd-85d7-26b511a7efa8.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*
