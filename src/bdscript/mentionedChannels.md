# $mentionedChannels
Returns the ID of the mentioned channel.

## Usage
```php
$mentionedChannels[mentionNumber;(fallbackToCurrent)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| mentionNumber | The channel-mention to get from the author's message. **\*** | [HowMany](/src/resources/arguments/types.md#howmany) | [Required](/src/resources/arguments/flags.md#required)
| fallbackToCurrent | Whether to return the current channel ID if no channel is mentioned. | [Bool](/src/resources/arguments/types.md#bool) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** `1` = first user-mention, `2` = second, `>` = last mention, etc.

## Examples
### Example #1
*Getting the first mentioned channel's ID:*
```
$nomention
$mentionedChannels[1]
```
![](https://user-images.githubusercontent.com/69215413/126917253-33db5d96-fdb3-43a3-b614-1ac061701fb1.png)

### Example #2
*Getting the first mentioned channel's name using [`$channelName[]`](./channelName.md):*
```
$nomention
$channelName[$mentionedChannels[1]]
```
![](https://user-images.githubusercontent.com/69215413/147862179-ca2d226a-6f07-4536-9c1d-a54985aaf321.png)

### Example #3
*Getting the first mentioned channel's type using [`$channelType[]`](./channelType.md):*
```
$nomention
$channelType[$mentionedChannels[1]]
```
![](https://user-images.githubusercontent.com/69215413/147862186-092ea321-d0e1-4b70-82e9-6f25eb3f5960.png)

### Example #4
*Getting the first mentioned channel's topic using [`$channelTopic[]`](./channelTopic.md):*
```
$nomention
$channelTopic[$mentionedChannels[1]]
```
![](https://user-images.githubusercontent.com/69215413/147862192-9bc49dd7-ed6a-4d41-9f8c-6dea9dbcd9c1.png)

### Example #5
*Getting the first mentioned channel's NSFW status using [`$isNSFW[]`](./isNSFW.md):*
```
$nomention
$isNSFW[$mentionedChannels[1]]
```
![](https://user-images.githubusercontent.com/69215413/147862199-eed9a504-f15f-4a06-91e9-0353ba38980a.png)

### Example #6
*Getting the first mentioned channel's creation date using [`$creationDate[]`](./creationDate.md):*
```
$nomention
$creationDate[$mentionedChannels[1]]
```
![](https://user-images.githubusercontent.com/69215413/147862204-8272409d-1f09-430f-ba3e-1f4abaac11cc.png)

### Example #7
*Mentioning the first mentioned channel:*
```
$nomention
<#$mentionedChannels[1]>
```
![](https://user-images.githubusercontent.com/69215413/147862208-d2f56bbd-f35c-4f0b-9b42-3bdc32759e69.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*