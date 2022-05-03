# Awaited Reactions
*(for premium bots)*

Awaited reactions allow you to make commands triggered by a reaction.

![end result](https://i.imgur.com/diskuyv.png)

Here's how the end result looks like.
## Breakdown
- You can use `$usedEmoji` to get the emoji the user reacted with.

## Creating an Awaited Reaction Command
**!icecream**
```
$nomention
$title[What's your favorite ice cream?]
$description[
1️⃣ Vanilla
2️⃣ Chocolate
3️⃣ Strawberry
]
$awaitReactions[icecream;1️⃣;icecream;2️⃣;icecream;3️⃣]
```

**$reaction[icecream]**:
```
$if[$usedEmoji==1️⃣]
  You picked **Vanilla** ice cream!
$endif

$if[$usedEmoji==2️⃣]
  You picked **Chocolate** ice cream!
$endif

$if[$usedEmoji==3️⃣]
  You picked **Strawberry** ice cream!
$endif
```

If you want to avoid using [if statements](/src/guides/ifStatements.md), then you could create separatr commands for each reaction. For example, `$awaitReactions[icecream_vanilla;1️⃣;icecream_chocolate;2️⃣;icecream_strawberry;3️⃣]`, then you'd create 3 commands named `$reaction[icecream_vanilla]`, `$reaction[icecream_chocolate]`, `$reaction[icecream_strawberry]`.

## `accept` command

![accept command](https://i.imgur.com/AEJ9BRk.jpg)

`$awaitReactions[awaited reaction name;reaction]` is used to specify which command is used when user reacts with `reaction`.
`$awaitReactions[]` allows you to group reactions *(as you can see in the accept command)* by specifing more `awaited reaction name`s and `reaction`s. What does it mean?
When one of the reactions is used then the other one stops working. So for example if I react with ✔️ then ❌ stops working.

## Awaited reaction trigger
Here you can see the `acceptCmd` and `declineCmd` awaited reaction commands:

![acceptCmd](https://i.imgur.com/xwFWnbM.jpg)

![acceptCmd](https://i.imgur.com/TEUu2UM.jpg)

`$reaction[name]`. As you can see it's pretty straightforward.
If you want to know what emoji was used in the `$reaction[]` trigger command
then you can use `$usedEmoji` which will return the emoji that was used.
