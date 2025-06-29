# $threadMessageCount
Returns the total number of users in the current thread. (**not including bot's response**)

## Syntax
```
$threadMessageCount
```

## Example
```
$nomention
This thread has a total of $threadMessageCount messages sent!
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    Hello guys!
- user_id: 390515191819010058
  username: kubastick
  color: "#FF0000"
  content: |
    Hello RainbowKey! 👋
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
    This thread has a total of 3 messages sent!
- user_id: 390515191819010058
  username: kubastick
  color: "#FF0000"
  content: |
    Nice!
```
