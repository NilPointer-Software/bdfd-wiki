# $onlyIfMessageContains
Checks if the provided message contains every provided word, otherwise the provided error message is returned.

## Syntax
```
$onlyIfMessageContains[Message;Word;...;Error message]
```

### Parameters 
- `Message` `(Type: String || Flag: Emptiable)`: The text to check.
- `Word` `(Type: String || Flag: Emptiable)`: The words that the message must contain. Use semicolons `;` as a separator to separate multiple words.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned if the text doesn't contain all the provided words.

## Example
```
$nomention
$onlyIfMessageContains[$message;Hello;Hi;❌ Your message must contain `Hello` and `Hi`!]
Hello world!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Bye
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ Your message must contain <code>Hello</code> and <code>Hi</code>!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    ❌ Your message must contain <code>Hello</code> and <code>Hi</code>!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello Hi
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello world!
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example Hello <@MineBartekSA>. Hi!
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hello world!
```

```admonish question title="What is this?"
How [`$username`](./username.md) works?
```
