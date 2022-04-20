# $getTimestamp
Returns [unix timestamp](https://www.unixtimestamp.com/) (in seconds). Can be used for Discord's localized Timestamp Markdown feature.

## Usage
```php
$getTimestamp
```

## Examples
### Example #1
```
$nomention
<t:$getTimestamp:f>
```
![](https://user-images.githubusercontent.com/69215413/138787654-73590a6f-9d8f-493d-8929-d308db12f846.png)
> 🧠 **Tip:** See different timestamp styles which you can replace `f` with [here](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles).

### Example #2
```
$nomention
Unix Timestamp: $getTimestamp
```
![](https://user-images.githubusercontent.com/69215413/125980242-02e20d79-3cb6-45c0-b9d8-07da4844eb89.png)