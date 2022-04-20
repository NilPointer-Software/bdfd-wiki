# $error
Returns information about the error that got catched by [`$catch`](./catch.md), from the [`$try[]`](./try.md) block's code.

## Usage
```php
$error[option]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| option | The error information to return. | [Enum](/src/resources/arguments/types.md#enum) ? [ErrorOptions](/src/enumdefs/errorOptions.md) | [Required](/src/resources/arguments/flags.md#required)

> ⚠️ **Warning:** `$error[]` can only used within the [`$catch`](./catch.md) block, which can only be used in [`$try`](./try.md).

> [Click here for more information about error handling](/src/guides/trycatch.md)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ❌ |
| BDScript 2 | ✅ |
| BDScript Unstable | ❌ |

*✅ Supported | ❌ Unsupported*