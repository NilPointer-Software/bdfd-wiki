# $mentioned
Returns the ID of the mentioned user.

## Usage
```
$mentioned[mentionNumber;returnAuthor (yes/no)]
```

### Breakdown
- `mentionNumber` - The user-mention to get from the author's message  (`1` = first user-mention, `2` = second, etc).
- `returnCurrent` - Whether to return the author's ID if no user is mentioned or not.

## Example
```
$nomention
$mentioned[1]
```

![example](https://user-images.githubusercontent.com/69215413/126917181-5e4c71e3-6b8e-4d9d-96ef-2a9b8af7faf2.png)
