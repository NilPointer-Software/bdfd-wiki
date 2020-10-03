# Awaited commands and functions

This feature allows premium bots to await for user's answer. \
Here's how the end result looks like: \

![end result](https://i.imgur.com/rRRcIXA.jpg) \

As you can see, the bot asks us to provide a number and then checks \
if provided value is a number. \

## `is-number` command

That's how `is-number` command looks like:
![is-number command](https://i.imgur.com/WatX9MY.jpg) \

`$awaitFunc[test2]` launches await command which is called `test2`. \

## Awaited command
Here you can see the test2 awaited command:

![awaited command](https://i.imgur.com/gPJH5GC.jpg) \

Have you noticed what's in the command's trigger?\
`$awaitedCommand[test2;<numeric>]` - the first argument is the command's name.\
In this case it's *test2*. The second argument is a filter.\
`<numeric>` means that the awaited command expects **only numbers**.

Here are currently available filters:
- **\<numeric\>** - only numbers are accepted
- **<this/is/a/choice/filter>** - one of the words separated by **/** is expected
- **an empty filter** - every word is accepted

What happens if the filter doesn't match?\
Well, you can create a command which will be used instead.\

## Awaited error command

![error command](https://i.imgur.com/Y27bCZB.jpg) \

As you can see, we are using `$awaitedCommandError[test2]` in the trigger.\
The first argument specifies the command's name.\
This command will only be used when the filter in \
the awaited command does not match user's response.


