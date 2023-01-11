# $getRoleColor
Returns a role's color hex.

## Usage
```
$getRoleColor[roleID]
```

### Parameters
- `roleID` `(Type : Snowflake || Flag : Required)` : The role to get the color hex from.

## Example
```
$nomention
$description[<@$authorID>'s color: `#$getRoleColor[$highestRole[$authorID]]`]
$color[$getRoleColor[$highestRole[$authorID]]]
```

![example](https://user-images.githubusercontent.com/69215413/123296726-e7b59080-d4e4-11eb-8b7d-4712af14faa6.png)
