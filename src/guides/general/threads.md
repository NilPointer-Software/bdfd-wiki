# Threads

In this section, you'll learn how to integrate threads in your bot.

> Make sure your bot has `SEND_MESSAGES_IN_THREADS` permission.

## Content
[**Functions Used**](#functions-used) > [**Archive Duration**](#archive-duration) > [**$startThread[]**](#startthread) > [**$editThread[]**](#editthread) > [**$threadAddMember[]**](#threadaddmember) > [**$threadRemoveMember[]**](#threadremovemember) > [**Simple Code**](#simple-code)

## Functions Used
- [`$startThread[]`](../../bdscript/startThread.md)
- [`$editThread[]`](../../bdscript/editThread.md)
- [`$threadAddMember`](../../bdscript/threadAddMember.md)
- [`$threadRemoveMember[]`](../../bdscript/threadRemoveMember.md)

## Archive Duration
`60` - 1 Hour\
`1440` - 1 Day\
`4320` - 3 Days (Only for servers with level 1 boosted)\
`10080` - 7 Days (Only for servers with level 2 boosted)

# $startThread
Creates a new thread in the provided channel.

## Syntax
```
$startThread[Thread name;Channel ID;Message ID;(Archive duration;Return thread ID?)]
```

> Required permissions that the bot must have for this function to work properly:
- `createpublicthreads`

### Parameters
- `Thread name` `(Type: String || Flag: Required)`: The name of the newly created thread.
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel where the thread will be created.
- `Message ID` `(Type: Snowflake || Flag: Emptiable)`: The message from which the thread will be created. Can be left empty.
- `Archive duration` `(Type: Integer || Flag: Optional)`: The [archive duration](#archive-duration) after which the thread will be auto-archived due to inactivity. Defaults to `60`.
- `Return thread ID?` `(Type: Bool || Flag: Optional)`: Whether to return the thread channel ID or not. Defaults to `no`.

## Example
```
$nomention
I created a new thread! <#$startThread[Cool Thread;$channelID;;1440;yes]>
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- type: thread
  content: |
    <i style="color: #378afa">BDFD Support</i> Started a thread: <i style="color: white">Cool Thread</i>. See all <i style="color: white">threads</i>.
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    I created a new thread! <#Cool Thread>
```
\

# $editThread
Modifies an existing thread.

## Syntax
```
$editThread[Thread ID;(Thread name;Archived?;Archive duration;Locked?;Slowmode)]
```

### Parameters
- `Thread ID` `(Type: Snowflake || Flag: Required)`: The thread channel to edit.
- `Thread name` `(Type: String || Flag: Optional)`: The new name of the thread.
- `Archived?` `(Type: Bool || Flag: Optional)`: Whether to archive this thread or not.
- `Archive duration` `(Type: Integer || Flag: Optional)`: The [archive duration](#archive-duration) after which the thread will be auto-archived due to inactivity. Defaults to `60`.
- `Locked?` `(Type: Bool || Flag: Optional)`: Whether to lock this thread or not. Note that archived threads can't be locked.
- `Slowmode` `(Type: Integer || Flag: Optional)`: The slowmode of this channel, expressed in seconds.

>  Use `!unchanged` as an argument for the option to remain in its current state.

## Example
```
$nomention
$editThread[1098166444111433819;Cool Thread 😎;no;!unchanged;!unchanged;5]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- type: edit
  content: |
    <i style="color: #378afa">BDFD Support</i> <i style="color: white">changed the channel name: <b>Cool Thread 😎</b></i>
```
\
# $threadAddMember
Adds a user to a thread.

## Syntax
```
$threadAddMember[Thread ID;User ID]
```

### Parameters
- `Thread ID` `(Type: Snowflake || Flag: Required)`: The ID of the thread channel to add the user to.
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to add to the thread.

## Example
```
$nomention
$threadAddMember[1021054508975009793;$authorID]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
```
- In the thread:

``` discord yaml
- type: join
  content: |
    <i style="color: #378afa">BDFD Support</i> added <i style="color: #E67E22">RainbowKey</i> to the thread.
```
\
# $threadRemoveMember
Removes a user from a thread.

## Syntax
```
$threadRemoveMember[Thread ID;User ID]
```

### Parameters
- `Thread ID` `(Type: Snowflake || Flag: Required)`: The ID of the thread channel to remove the user from.
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to remove from the thread.

## Example
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
```
- In the thread:

``` discord yaml
- type: leave
  content: |
    <i style="color: #378afa">BDFD Support</i> removed <i style="color: #E67E22">RainbowKey</i> from the thread.
```
\

# Simple Code
```
$nomention
$var[id;$startThread[Cool Thread;$channelID;;1440;yes]]
New thread - <#$var[id]>
$threadAddMember[$var[id];$authorID]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- type: thread
  content: |
    <i style="color: #378afa">BDFD Support</i> Started a thread: <i style="color: white">Cool Thread</i>. See all <i style="color: white">threads</i>.
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    New thread - <#Cool Thread>
```
- In the thread:

``` discord yaml
- type: join
  content: |
    <i style="color: #378afa">BDFD Support</i> added <i style="color: #E67E22">RainbowKey</i> to the thread.
```
\
> If you want to learn more about threads, read [Discord's support article](https://support.discord.com/hc/en-us/articles/4403205878423-Threads-FAQ).
