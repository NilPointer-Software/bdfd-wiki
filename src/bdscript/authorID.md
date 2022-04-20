# $authorID
Returns message author's ID. 

## Usage
```php
$authorID
```

## Example
```
$nomention
This command was executed by <@$authorID>!
```
![](https://user-images.githubusercontent.com/69215413/141665977-6e9e19a4-0291-4954-afef-85af0ee875d4.png)

> 🤔 **Explanation:** Discord uses this format: `<@USER_ID>` to mention a user. For example, let's say that `$authorID` is equal to `246604909451935745`. 
If we use this: `<@$authorID>`, it will be replaced with `<@246604909451935745>` and Discord will interpret that as a mention *(@Noituri)*.

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*