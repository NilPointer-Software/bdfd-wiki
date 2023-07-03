# $isMentionable
Returns whether a role is mentionable by everyone or not.

> 🧙‍♂️ "true" means the role is mentionable, "false" means it isn't.

![setting](https://user-images.githubusercontent.com/69215413/123517230-e5327280-d66d-11eb-8337-35dac5f276e7.png)

## Syntax
```
$isMentionable[Role ID]
```

### Parameters
- `Role ID` `(Type: Snowflake || Flag: Required)`: The role to check for its mentionable status.

## Example
```
$nomention
$isMentionable[$findRole[$message]]
```

![example](https://user-images.githubusercontent.com/69215413/126853667-5263fa7a-3e79-4691-b33d-509f507670c5.png)
