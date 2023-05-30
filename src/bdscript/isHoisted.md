# $isHoisted
Returns whether or not a role is displayed separately.

> 🧙‍♂️ 'true' means the role is hoisted, 'false' means the role isn't hoisted.

## Syntax
```
$isHoisted[Role ID]
```

### Parameters
- `Role ID` `(Type: Snowflake || Flag: Required)`: The role to check its hoisted status.

## Example
```
$nomention
$isHoisted[$findRole[$message]]
```

![example](https://user-images.githubusercontent.com/69215413/126853587-2be4d152-7254-4424-9fa0-5ab1d93837f7.png)
