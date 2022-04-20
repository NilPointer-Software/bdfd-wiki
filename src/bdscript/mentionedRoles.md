# $mentionedRoles
Returns the ID of the mentioned role.

## Usage
```php
$mentionedRoles[mentionNumber]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| mentionNumber | The role-mention to get from the author's message. **\*** | [HowMany](/src/resources/arguments/types.md#howmany) | [Required](/src/resources/arguments/flags.md#required)

## Examples
### Example #1
*Getting the ID of the first role mention:*
```
$nomention
$mentionedRoles[1]
```
![](https://user-images.githubusercontent.com/69215413/126917307-96384c6f-ccfe-4117-927d-40ad87b5bf8f.png)

### Example #2
*Getting the name of the first role mention using [`$roleName[]`](./roleName.md):*
```
$nomention
$roleName[$mentionedRoles[1]]
```
![](https://user-images.githubusercontent.com/69215413/147864200-e1bd9fd5-b772-4269-8bb1-5c99b06e5800.png)

### Example #3
*Getting the color hex of the first role mention using [`$getRoleColor[]`](./getRoleColor.md):*
```
$nomention
$getRoleColor[$mentionedRoles[1]]
```
![](https://user-images.githubusercontent.com/69215413/147864217-53e11ed2-487c-461a-ab57-86b2f4884d33.png)

### Example #4
*Getting whether or not the first role mention is hoisted using [`$isHoisted[]`](./isHoisted.md):*
```
$nomention
$isHoisted[$mentionedRoles[1]]
```
![](https://user-images.githubusercontent.com/69215413/147864231-194950a0-1a74-41d3-89ab-90fd736d43b7.png)

### Example #5
*Getting whether or not the first role mention is mentionable using [`$isMentionable[]`](./isMentionable.md):*
```
$nomention
$isMentionable[$mentionedRoles[1]]
```
![](https://user-images.githubusercontent.com/69215413/147864250-b0817191-3ca7-4474-8fab-6afbe8f37327.png)

### Example #6
*Getting the position of the first role mention using [`$rolePosition[]`](./rolePosition.md):*
```
$nomention
$rolePosition[$mentionedRoles[1]]
```
![](https://user-images.githubusercontent.com/69215413/147864262-43b02b60-335d-4fa8-826d-5aa5ae2da021.png)

### Example #7
*Mentioning the first role mention:*
```
$nomention
<@&$mentionedRoles[1]>
```
![](https://user-images.githubusercontent.com/69215413/147864280-48416810-e7d5-4257-8cdd-3be5addb90af.png)

### Example #8
*Getting the creation date of the first role mention using [`$creationDate[]`](./creationDate.md):*
```
$nomention
$creationDate[$mentionedRoles[1]]
```
![](https://user-images.githubusercontent.com/69215413/147864309-6325caf2-627b-4e0f-bbdb-1f94ee94600e.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*