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
Category ID: $parentID[$mentionedChannels[1]]
```
![grafik](https://user-images.githubusercontent.com/94063167/199022843-84b86272-d690-4630-99ba-80e024ffea52.png)
