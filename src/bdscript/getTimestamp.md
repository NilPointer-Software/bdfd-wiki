# $getTimestamp
Returns current [unix timestamp](https://www.unixtimestamp.com/).

## Usage
There are two usages of `$getTimstamp` function -

### Usage #1
```
$getTimestamp
```
Returns unix timestamp in seconds.

#### Example
```
$nomention
Unix Timestamp: $getTimestamp
```

![example](https://user-images.githubusercontent.com/69215413/125980242-02e20d79-3cb6-45c0-b9d8-07da4844eb89.png)

### Usage #2
```
$getTimestamp[Time unit]
```
- `Time unit` - Returns unix timestamp in selected time unit.

    > 📝 Time unit value can either be :
    > - `s` (seconds)
    > - `ms` (milliseconds)
    > - `ns` (nanoseconds)

#### Example
