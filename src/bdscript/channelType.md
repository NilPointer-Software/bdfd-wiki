# $channelType
Returns the type of a channel. 

## Syntax
```
$channelType[Channel ID]
```

> The different channel types that the bot will return are: `text`, `voice`, `category`, `thread`, `dm`, `stage`, `announcement` and `forum`.

### Parameters 
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel which type will be returned.


## Example
```
$nomention
$channelType[$channelID]
```
**Text Channel**

![example1](https://user-images.githubusercontent.com/111157596/250920367-a11b2e62-deb7-44ef-a3aa-1e7975c61020.png)

**DM Channel**

![example2](https://user-images.githubusercontent.com/111157596/250920478-108e1b24-dfdc-4609-aedc-9ea328ac33fb.png)
