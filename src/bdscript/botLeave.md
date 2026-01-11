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

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#ffffff"
  bot: true
  verified: true
  content: |
    I left this server!
```
\
![example](https://user-images.githubusercontent.com/113303649/210329580-8237da8e-762c-422f-9408-f0e734a21657.png)

```admonish question title="What is this?"
How [`$sendMessage[]`](./sendMessage.md) works?
```

> If you are using **BDScript 2**, put `$botLeave` at the very bottom of the code so that the code works correctly i.e:
> 
> ❌ Not correct:
> ```
> $botLeave
> $nomention
> $sendMessage[I left this server!]
> ```
> 
> ✅ Correct:
> ```
> $nomention
> $sendMessage[I left this server!]
> $botLeave
> ```
