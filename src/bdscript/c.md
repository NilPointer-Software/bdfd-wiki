# $c
Adds a comment to the code. Comments do not appear in the bot's response.

## Syntax
```
$c[Comment]
```

### Parameters 
- `Comment` `(Type: String || Flag: Emptiable)`: Any text. This text will not be taken into account during processing. Commonly used to add notes to the code.

## Example
```
$nomention
$noMentionMessage
$c[This is a say command. You are reading a comment!]
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !say As you can see, the comment doesn't appear! Pretty cool; right?

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    As you can see, the comment doesn't appear! Pretty cool; right?
```
