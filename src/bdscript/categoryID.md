# $categoryID
Returns the category ID of the given category name.

```admonish note
To get the category ID from a *channel ID* use [`$parentID`](./parentID.md).
```

## Syntax
```
$categoryID[Category name]
```

### Parameters
- `Category name` `(Type: String || Flag: Required)`: The name of the category from which to return the ID.

## Example
```
$nomention
Category ID: $categoryID[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Category ID: 790620501927526462
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
