# Threads

In this section, you'll learn how to integrate threads in your bot.

```admonish warning
Make sure your bot has `SEND_MESSAGES_IN_THREADS` permission.
```

## Content
[**Functions Used**](#functions-used) > [**Archive Duration**](#archive-duration) > [**$startThread[]**](#startthread) > [**$editThread[]**](#editthread) > [**$threadAddMember[]**](#threadaddmember) > [**$threadRemoveMember[]**](#threadremovemember) > [**$threadUserCount[]**](#threadusercount) > [**$threadMessageCount[]**](#threadmessagecount) > [**Simple Code**](#simple-code)

## Functions Used
- [`$startThread[]`](../../bdscript/startThread.md)
- [`$editThread[]`](../../bdscript/editThread.md)
- [`$threadAddMember`](../../bdscript/threadAddMember.md)
- [`$threadRemoveMember[]`](../../bdscript/threadRemoveMember.md)
- [`$threadUserCount`](../../bdscript/threadUserCount.md)
- [`$threadMessageCount[]`](../../bdscript/threadMessageCount.md)

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

```admonish info
Required permissions that the bot must have for this function to work properly:
- `createpublicthreads`
```

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
  color: "#E67E22"
  content: |
    !example
- type: thread
  content: |
    <i style="color: #378afa">BDFD Support</i> Started a thread: <i style="color: white">Cool Thread</i>. See all <i style="color: white">threads</i>.
- user_id: 1009018156494368798
  username: BDFD Support
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

```admonish tip
Use `!unchanged` as an argument for the option to remain in its current state.
```

## Example
```
$nomention
$editThread[1098166444111433819;Cool Thread 😎;no;!unchanged;!unchanged;5]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
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

# $threadUserCount
Returns the total number of users in the current thread.

## Syntax
```
$threadUserCount
```

## Example
```
$nomention
This thread has $threadUserCount users!
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    This thread has 29 users!
```

# $threadMessageCount
Returns the total number of messages in the current thread. (**not including bot's response**)

## Syntax
```
$threadMessageCount
```

## Example
```
$nomention
This thread has a total of $threadMessageCount messages sent!
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    Hello guys!
- user_id: 390515191819010058
  username: kubastick
  color: "#FF0000"
  content: |
    Hello RainbowKey! 👋
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    This thread has a total of 3 messages sent!
- user_id: 390515191819010058
  username: kubastick
  color: "#FF0000"
  content: |
    Nice!
```

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
  color: "#E67E22"
  content: |
    !example
- type: thread
  content: |
    <i style="color: #378afa">BDFD Support</i> Started a thread: <i style="color: white">Cool Thread</i>. See all <i style="color: white">threads</i>.
- user_id: 1009018156494368798
  username: BDFD Support
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

```admonish note
If you want to learn more about threads, read [Discord's support article](https://support.discord.com/hc/en-us/articles/4403205878423-Threads-FAQ).

```
