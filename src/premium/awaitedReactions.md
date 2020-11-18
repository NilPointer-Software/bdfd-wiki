# Awaited reactions
*(for premium bots)*

Thanks to awaited reactions your bot can be triggered by reactions

![end result](https://i.imgur.com/diskuyv.png) \

Here's how the end result looks like.

## `accept` command

![accept command](https://i.imgur.com/AEJ9BRk.jpg) \

`$awaitReactions[awaited reaction name;reaction]` is used to specify which command is used when user reacts with `reaction`.\
`$awaitReactions[]` allows you to group reactions *(as you can see in the accept command)* by specifing more `awaited reaction name`s and `reaction`s. What does it mean?\
When one of the reactions is used then the other one stops working. So for example if I react with ✔️ then ❌ stops working.\

## Awaited reaction trigger
Here you can see the `acceptCmd` and `declineCmd` awaited reaction commands:

![acceptCmd](https://i.imgur.com/xwFWnbM.jpg) \
![acceptCmd](https://i.imgur.com/TEUu2UM.jpg) \

`$reaction[name]`. As you can see it's pretty straightforward.\
If you want to know what emoji was used in the `$reaction[]` trigger command\
then you can use `$usedEmoji` which will return the emoji that was used.
