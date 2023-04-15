# $getTimestamp[]
Returns the current [unix timestamp](https://www.unixtimestamp.com/) in selected time unit.

## Syntax
```
$getTimestamp[Time unit]
```

### Parameters
- `Time unit` `(Type: Enum || Flag: Required)`: Sets timestamp time unit

> :pencil: Time unit value can either be :
> - `s` (seconds)
> - `ms` (milliseconds)
> - `ns` (nanoseconds)

## Example
```
$nomention
Unix Timestamp
 In Seconds - $getTimestamp[s]
 In Milliseconds - $getTimestamp[ms]
 In Nanoseconds - $getTimestamp[ns]
 ```
 ![example](https://user-images.githubusercontent.com/95774950/188307175-48845a0d-6229-46f3-80eb-f1f9d3fde974.png)
 
> 📄 For more info about UNIX timestamps on Discord click [here](../resources/discordTimestamps.md).
