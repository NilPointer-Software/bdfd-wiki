# Awaited reactions
*(for premium bots)*

**Awaited reactions** are similar to [awaited commands](../guides/awaitedCommands.md). Unlike awaited commands which wait for a message, they wait for a reaction instead. 

``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    accept

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: <none>
  embed:
    description: Do you accept?
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Twemoji12_2705.svg/640px-Twemoji12_2705.svg.png
      name: ":white_check_mark:"
      count: 2
      reacted: true
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Twemoji2_274c.svg/640px-Twemoji2_274c.svg.png
      name: ":x:"
      count: 1

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Accepted

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    accept

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: <none>
  embed:
    description: Do you accept?
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Twemoji12_2705.svg/640px-Twemoji12_2705.svg.png
      name: ":white_check_mark:"
      count: 1
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Twemoji2_274c.svg/640px-Twemoji2_274c.svg.png
      name: ":x:"
      count: 2
      reacted: true

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Declined
```

> 📝 Reaction roles are not possible at the moment since awaited reactions can only be triggered by the author and they expire whenever the bot goes offline.

# Getting Started
To create an awaited reaction command, following functions and callback are used :

## $awaitReactions[]
This function is used to await a reaction command.

### Syntax
```
$awaitReactions[<Command name;Reaction>;...]
```

#### Parameters
- `Command name` `(Type: String || Flag: Required)`: It's the name which will be used inside the `$reaction[]` callback.
- `Reaction` `(Type: Emoji || Flag: Required)`: It awaits the given emoji. Emoji must be either in Unicode or in Discord emoji ID format.


> 📝 You can group reactions by specifying more *"command names"* and *"reactions"* in `$awaitReactions[]`.\
\
> ⚠️ In group reactions, when one reaction is used, the others stop working i.e let's say, a command awaits two reactions (✔️ & ❌). If the user reacts ✔️ then ❌ stops working.

## $reaction[]
`$reaction[]` is a [callback](../callbacks/introduction.md). It gets triggered whenever an awaited reaction occurs.

### Syntax
```
$reaction[Name]
```

#### Parameters
- `Name` `(Type: String || Flag: Required)`: It's the value which is used in the *"command name"* argument of `$awaitReactions[]`.

## $usedEmoji
This function is used to return the emoji which was triggered in the `$reaction[]` command.

### Syntax
```
$usedEmoji
```

## Example
![Screenshot_20220809_194823](https://user-images.githubusercontent.com/95774950/183701101-550bf56c-3cd2-4511-bc03-8f8398fe4d8b.png)
![Screenshot_20220809_194754](https://user-images.githubusercontent.com/95774950/183701030-c82a8744-9dff-4ad9-83b5-2aa64f45cc59.png)
![Screenshot_20220809_194805](https://user-images.githubusercontent.com/95774950/183701074-395c4770-8439-4441-a0ad-5c69ae9cded4.png)

``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    accept

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: <none>
  embed:
    description: Do you accept?
  reactions:
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Twemoji12_2705.svg/640px-Twemoji12_2705.svg.png
      name: ":white_check_mark:"
      count: 2
      reacted: true
    - emoji: https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Twemoji2_274c.svg/640px-Twemoji2_274c.svg.png
      name: ":x:"
      count: 1

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Accepted ✅
```
