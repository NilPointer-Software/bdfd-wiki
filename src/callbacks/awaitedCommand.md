# $awaitedCommand
_Triggered when an awaited command gets initiated._

`$awaitedCommand[]` is a callback, which means it's used in the command trigger (not the code). The command is ran when an awaited command gets initiated.

## Syntax
```
$awaitedCommand[Name;(Filter)]
```

### Parameters
- `Name` `(Type: String || Flag: Required)`: The name used in the [`$awaitFunc[]`](../bdscript/awaitFunc.md) function.
- `Filter` `(Type: String || Flag: Optional)`: It is used to limit the user input.

### Supported filters
- `<numeric>` - Accepts only number input.
- `<word1/word2>` - Accepts only specified words provided inside `<>`. Use `/` as a separator for multiple words.

## Example
### Without filter
**Trigger: `$awaitedCommand[say;]`**
```
$nomention
$message
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !say

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    What do you want me to say?

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    I love BDFD!

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    I love BDFD!
```
\
### With choose filter
**Trigger: `$awaitedCommand[odd;<yes/no/cancel>]`**
```
$nomention
$if[$message==yes]
   Your answer is correct!
$elseif[$message==no]
   Your answer is incorrect!
$elseif[$message==cancel]
   Command cancelled!
$endif
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !odd

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Is "19" an odd number?

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    yes

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Your answer is correct!

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !odd

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Is "19" an odd number?

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    no

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Your answer is incorrect!

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !odd

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Is "19" an odd number?

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    cancel

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Command cancelled!
```
\
### With numeric filter
**Trigger: `$awaitedCommand[odd;<numeric>]`**
```
$nomention
You have provided a number: $message
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !number

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Provide a number!

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    7

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    You have provided a number: 7
```

> For more info, see the [Awaited Commands Guide](../guides/general/awaitedCommands.md).
