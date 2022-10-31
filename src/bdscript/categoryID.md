# $categoryID
Returns a category ID.

## Usages
There are two usages of this function :

### Usage #1
#### Syntax
```
$categoryID
```
Returns the current channel's category ID.

#### Example
```
$nomention
Current category: $categoryID
```
![example](https://user-images.githubusercontent.com/94063167/198906344-b98b8db2-2ae5-4cbf-b708-c50fc6963d04.png)

### Usage #2
#### Syntax
```
$categoryID[Channel Name]
```
Returns category ID for given channel name.

#### Parameters
- `Channel Name`: The name of the channel from which to retrieve the category ID.

#### Example
```
$nomention
Category ID: $categoryID[$message]
```
![example2](https://user-images.githubusercontent.com/94063167/198906454-b8ba28dd-909c-4411-b726-863ec5ceb146.png)
