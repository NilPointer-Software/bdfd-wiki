# $findRole
Finds a role's ID using the given role name, ID, or mention.

## Usage
```php
$findRole[role]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| role | The role name, ID, or mention to find. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$findRole[$message]
```
![](https://user-images.githubusercontent.com/69215413/125977360-1deeba9f-9350-4bbc-a69d-e56352a8d9aa.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*