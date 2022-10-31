# $channelPosition
Returns the position of a channel in the server.

## Usages
There are two usages of this function:

### Usage #1
#### Syntax
```
$channelPosition
```
Returns the position of the current channel in the server where the command was triggered.

#### Example
```
$nomention
$channelPosition
```
![Screenshot_20221023_010352](https://user-images.githubusercontent.com/95774950/197359274-63b717d9-bc29-45e4-83b5-099eab2e5b00.png)

### Usage #2
#### Syntax
```
$channelPosition[Channel ID]
````
- `Channel ID`: The ID of a specific channel to get it's position.

Returns the position of a specified channel in the server using it's ID.

#### Example
```
$nomention
$channelPosition[$mentionedChannels[1;yes]]
```
![Screenshot_20221023_010359](https://user-images.githubusercontent.com/95774950/197359290-6be78d3f-b907-404c-94da-f60123cc2b67.png)
