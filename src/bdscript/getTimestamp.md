# $getTimestamp
Returns current [unix timestamp](https://www.unixtimestamp.com/).

## Usage
There are two usages of `$getTimestamp` function :

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
```
$nomention
Unix Timestamp
 In Seconds - $getTimestamp[s]
 In Milliseconds - $getTimestamp[ms]
 In Nanoseconds - $getTimestamp[ns]
 ```
 ![Screenshot_20220904_150511](https://user-images.githubusercontent.com/95774950/188307175-48845a0d-6229-46f3-80eb-f1f9d3fde974.png)
