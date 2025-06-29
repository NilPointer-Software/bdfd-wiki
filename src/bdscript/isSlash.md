# $isSlash
Returns whether the command was ran as a slash command or not.

> "true" means the command was ran as a slash command, "false" means it wasn't.

## Syntax
```
$isSlash
```

## Example
```
$nomention
Is slash?: `$isSlash`
```

```discord yaml
- username: Flowcharts
  user_id: 566613317972394004
  color: "#748bd4"
  bot: true
  command:
    user_id: 803569638084313098
    author: RainbowKey
    command: /example
    color: "#E67E22"
  content: |
    Is slash?: <code>true</code>
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
    Is slash?: <code>false</code>
```
