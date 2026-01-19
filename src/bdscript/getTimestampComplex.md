# $getTimestamp[]
Returns the current [unix timestamp](https://www.unixtimestamp.com/) in the selected time unit.

## Syntax
```
$getTimestamp[Time unit]
```

```admonish tip title="Timestamp Converter"
You can use our ["Timestamp Converter" tool](../tools/timestamp.md) to work with unixtime!
```

### Parameters
- `Time unit` `(Type: Enum || Flag: Required)`: Sets timestamp time unit.

> Time unit value can either be :
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

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example 
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <div id="moreunix-mark"></div>
```

```admonish note
For more info about UNIX timestamps on Discord click [here](../resources/discordTimestamps.md).
```

<script src="../theme/livetime.js"></script>


