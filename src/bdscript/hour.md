# $hour
Returns the current hour of the day.
> 🧠 **Tip:**  You can use [`$time[]`](./time.md) to change the timezone.

> 🗒️ **Note:**  The `$hour[]` function  uses the twenty-four-hour clock instead of two groups of twelve hours; this also known as Military Time.

## Usage
```php
$hour
```

## Examples
### Example #1
```
$nomention
Current Hour: $hour
```
![](https://user-images.githubusercontent.com/69215413/122828499-c28e0b80-d2b3-11eb-82c9-941b758ec1ed.png)

### Example #2
*Check if it's PM or AM:*
```
$nomention

$if[$hour>=12]
PM
$else 
AM
$endif
```
![](https://user-images.githubusercontent.com/69215413/147858454-325de17c-3a5e-459a-9173-de4bc3af71f3.png)

### Example #3
*Making `$hour` in 12 hour groups:*
```
$nomention

$if[$hour>=12]
$sub[$hour;12] PM
$else
$hour AM
$endif
```
![](https://user-images.githubusercontent.com/69215413/147858426-482c5869-1251-40be-84e3-b3e3cab5bedc.png)


## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*