# $mentionedRoles
Returns the ID of the mentioned role.

## Usage
```
$mentionedRoles[mentionNumber]
```

### Parameters 
- `mentionNumber` `(Type: HowMany || Flag: Required)`: The role-mention to get from the author's message  (`1` = first role-mention, `2` = second, etc).

## Example
```
$nomention
$mentionedRoles[1]
```

![example](https://user-images.githubusercontent.com/69215413/126917307-96384c6f-ccfe-4117-927d-40ad87b5bf8f.png)
