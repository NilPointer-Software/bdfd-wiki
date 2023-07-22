# $categoryID
Returns category ID for the given category name.

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
![example](https://user-images.githubusercontent.com/94063167/198906454-b8ba28dd-909c-4411-b726-863ec5ceb146.png)

> To get the category ID from a *channel ID* use [`$parentID`](./parentID.md).
