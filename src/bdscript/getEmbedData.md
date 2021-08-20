# $getEmbedData
Fetches embed data from the provided message.

## Usage
```
$getEmbedData[channelID;messageID;embedIndex;embedProperty (title/description/footer)]
```

### Breakdown
- `channelID` - The channel this message belongs to.
- `messageID` - The message to get this embed data from.
- `embedIndex` - The embed of this message to get data from. Use `1` for the first embed of this message.
- `embedProperty` - The embed property to return.

## Example
```
$nomention
Title: $getEmbedData[876920205526319144;878299081380876339;1;title]
Description: $getEmbedData[876920205526319144;878299081380876339;1;description]
Footer: $getEmbedData[876920205526319144;878299081380876339;1;footer]
```
![example](https://user-images.githubusercontent.com/69215413/130266834-50421e8e-fe9f-4b2e-8937-c9b870f3296d.png)