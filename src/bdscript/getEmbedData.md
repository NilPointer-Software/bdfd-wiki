# $getEmbedData
Fetches embed data from the provided message.

## Syntax
```
$getEmbedData[Channel ID;Message ID;Embed index;Embed property (title/description/footer/color/image/timestamp)]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel this message belongs to.
- `Message ID` `(Type: Snowflake || Flag: Required)`: The message to get this embed data from.
- `Embed index` `(Type: HowMany || Flag: Required)`: The embed of this message to get data from. Use `1` for the first embed of this message. [(learn more)](../resources/embedIndexes.md)
- `Embed property` `(Type: Enum || Flag: Required)`: The embed property to return. Embed properties:
  - `title` - The title of the embed.
  - `description` - The description of the embed.
  - `footer` - The footer of the embed.
  - `color` - The color border hex of the embed.
  - `image` - The image of the embed.
  - `timestamp` - The timestamp of the embed.

## Example
```
$nomention
Title: $getEmbedData[876920205526319144;878299081380876339;1;title]
Description: $getEmbedData[876920205526319144;878299081380876339;1;description]
Footer: $getEmbedData[876920205526319144;878299081380876339;1;footer]
```
![example](https://user-images.githubusercontent.com/69215413/130266834-50421e8e-fe9f-4b2e-8937-c9b870f3296d.png)
