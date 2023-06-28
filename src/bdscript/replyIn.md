# $replyIn
The bot waits *x (amount of time)* before executing the code.

## Syntax
```
$replyIn[Time]
```

### Parameters
- `Time` `(Type: Duration || Flag: Required)`: How long the command is delayed for (e.g: 10s, 10m, 40m). (max is `40` minutes *(`120` minutes for premium users)*, min is `1` second)

## Example
*The bot replies after 3 seconds of the command execution.*
```
$nomention
$replyIn[3s]
Hi $username!
```
![example](https://user-images.githubusercontent.com/111157596/234020126-ae36612d-11ae-4f36-80bd-69f771643603.gif)
