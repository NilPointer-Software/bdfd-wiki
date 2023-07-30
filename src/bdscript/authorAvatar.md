# $authorAvatar
Returns the author's avatar URL.

## Syntax
```
$authorAvatar
```

## Example
```
$nomention
$image[$authorAvatar]
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !authorAvatar

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: " "
  embed:
    image: https://user-images.githubusercontent.com/111157596/257052136-4b8d5715-b381-4d5f-8c46-8ae0be53c8d8.png
```


> You can use `?size=size` at the end of the avatar URL to increase/decrease the image size. Example sizes: 1024, 2048, 4096. 
>
>  (e.g. `$image[$authorAvatar?size=4096]`)
