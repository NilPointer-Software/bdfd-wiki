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
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !example Information
- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Category ID: 790620501927526462
```

```admonish question title="What is this?"
How [`$message`](./message.md) works?
```
