# Awaited reactions
*(for premium bots)*

**Awaited reactions** are same like [awaited commands](../guides/awaitedCommands.md). Unlike awaited commands which waits for a message, it waits for a reaction instead. 

![end result](https://i.imgur.com/diskuyv.png)

> 📝 Reaction roles are not possible at the moment since awaited reactions can only be triggered by author and it gets expired whenever bot goes offline.

## Getting Started
To create an awaited reaction command, following functions and callback are used :

### $awaitReactions[]
This function is used to await an reaction command.

#### Usage
```
$awaitReactions[<Command name;Reaction>;...]
```
- `command name` - It's the name which will be used inside `$reaction[]` callback.
- `reaction` - It awaits the given emoji. Emoji must be either in unicode or discord emoji id format.



> 📝 You can group reactions by specifying more *"command name(s)"* and *"reaction(s)"* in `$awaitReactions[]`.\
\
> ⚠️ In group reactions, when one reaction is used. Then, the other(s) stops working i.e let's say, a command awaits two reactions (✔️ & ❌). If user reacts ✔️ then ❌ stops working.

### $reaction[]
`$reaction[]` is a [callback](../callbacks/introduction.md). It gets triggered whenever an awaited reaction occurs.

#### Usage
```
$reaction[name]
```
- `name` - It is the value which is used in *"command name"* argument of `$awaitReactions[]`.

### $usedEmoji
This function is used to return the emoji which was triggered in `$reaction[]` command.

#### Usage
```
$usedEmoji
```

## Example
