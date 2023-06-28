# $rolePosition
Returns a role's position *(1 being the highest role)*.

## Syntax
```
$rolePosition[Role ID]
```

### Parameters
- `Role ID` `(Type: Snowflake || Flag: Required)`: The role for which to get its position.

## Example
```
$nomention
$description[<@&$findRole[$message]>'s Position: $rolePosition[$findRole[$message]]]
```

![example](https://user-images.githubusercontent.com/69215413/126246527-d3ca814d-8c7d-4acf-bb1e-ec7286c741f0.png)
