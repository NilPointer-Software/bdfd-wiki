# $isHoisted
Returns if a role is displayed separately.
> 🧙‍♂️ 'true' means the role is hoisted, 'false' means the role isn't hoisted.

## Usage
```
$isHoisted[roleID]
```

### Parameters
- `roleID` `(Type: Snowflake || Flag: Required)`: The role to check its hoisted status.

## Example
```
$nomention
$isHoisted[$findRole[$message]]
```

![example](https://user-images.githubusercontent.com/69215413/126853587-2be4d152-7254-4424-9fa0-5ab1d93837f7.png)
