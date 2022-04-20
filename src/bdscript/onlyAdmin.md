# $onlyAdmin
Makes it so the command can only be executed by users with the administrator permission.

## Usage
```php
$onlyAdmin[errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| errorMessage | Message returned when the user isn't a administrator. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)


## Example
```
$nomention
$onlyAdmin[❌ Only administrators can use that command!]
Hello World! $c[Replace "Hello World!" with whatever code you are trying to make admin only.]
```
> 🗒️ **Note:** Replace "Hello World!" with whatever code you are trying to make administrator only.

**When the User is an Administrator:**

![](https://user-images.githubusercontent.com/69215413/148146280-d9353988-2422-4a91-8710-18774f1c1681.png)

**When the User isn't an Administrator:**

![](https://user-images.githubusercontent.com/69215413/148146279-28ccfcf4-533c-4424-a148-29bd801579e6.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*