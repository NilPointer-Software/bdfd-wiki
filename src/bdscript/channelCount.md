# $channelCount
Returns the amount of channels in the current server.

## Syntax
```
$channelCount
```

```admonish info
It's the sum of the number of categories, channels, and active forum posts (threads).
```

## Example
```
$nomention
There are $channelCount channels in this server!
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
      There are 34 channels in this server!
```

~~~admonish tip

To avoid counting categories, you can use [`$categoryCount`](./categoryCount.md):

```
$nomention
There are $sub[$channelCount;$categoryCount] channels in this server!
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
      There are 21 channels in this server!
```

> How [`$sub[]`](./sub.md) and [`$categoryCount`](./categoryCount.md) works?

~~~
