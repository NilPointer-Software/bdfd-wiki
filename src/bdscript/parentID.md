# $parentID
Returns the parent category ID of a channel.

## Usages
There are two usages of this function :

### Usage #1
#### Syntax
```
$parentID
```
Returns the parent category ID of the current channel.

#### Example
```
$nomention
Current category: $parentID
```
![example](https://user-images.githubusercontent.com/94063167/199015904-8c1635fc-ae14-40e6-9102-5f0a94a65cb7.png)

### Usage #2
#### Syntax
```
$parentID[Channel ID]
```
Returns the parent category ID for given channel ID.

#### Parameters
- `Channel ID`: The ID of the channel from which to retrieve the category ID.

#### Example
```
$nomention
Category ID: $parentID[$message]
```
![example2](https://user-images.githubusercontent.com/94063167/199021971-65ef4587-ee7c-438e-a685-4867b039dc2a.png)
