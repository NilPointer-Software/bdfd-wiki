# $isSlash
Returns whether the command was ran as a slash command or not.

> 🧙‍♂️ "true" means the command was ran as a slash command, "false" means it wasn't.

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
```
