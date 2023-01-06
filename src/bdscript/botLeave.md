# $botLeave
Forces the bot to leave the current server.

## Syntax
```
$botLeave
```
## Example
```
$nomention
$sendMessage[I left this server!]
$botLeave
```
![example](https://user-images.githubusercontent.com/113303649/210329580-8237da8e-762c-422f-9408-f0e734a21657.png)
> If you are using **BDScript 2**, put `$botLeave` at the very bottom of the code so that the code works correctly.
> 
❌ Not correct:
```
$botLeave
$nomention
$sendMessage[I left this server!]
```
✅ Correct:
```
$nomention
$sendMessage[I left this server!]
$botLeave
```
