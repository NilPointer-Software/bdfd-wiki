# $isMentionable
Returns whether or not a role is mentionable by everyone. 'true' means the role is mentionable, 'false' means it isn't.

## Usage
```php
$isMentionable[roleID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| roleID | The role that gets checked. | [Snowflake](/src/resources/arguments/types.md#snowflake) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$isMentionable[$findRole[$message]]
```
![](https://user-images.githubusercontent.com/69215413/126853667-5263fa7a-3e79-4691-b33d-509f507670c5.png)
