# Awaited reactions
*(for premium bots)*

**Awaited reactions** are similar to [awaited commands](../guides/awaitedCommands.md). Unlike awaited commands which wait for a message, they wait for a reaction instead. 

![end result](https://i.imgur.com/diskuyv.png)

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

| Argument       | Description                                                                                      | Type    | Flag     |
|----------------|--------------------------------------------------------------------------------------------------|---------|----------|
| Command name   | It's the name which will be used inside the `$reaction[]` callback.                              | String  | Required |
| Reaction       | It awaits the given emoji. Emoji must be either in Unicode or in Discord emoji ID format.        | Emoji   | Required |

### Note :
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

| Argument | Description                                                                   | Type   | Flag     |
|----------|-------------------------------------------------------------------------------|--------|----------|
| Name     | It's the value which is used in the "command name" argument of `$awaitReactions[]`. | String | Required |


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
![Screenshot_20220809_194642](https://user-images.githubusercontent.com/95774950/183700978-16ae78d2-a305-4f2b-8388-c55ecadd83cc.png)
