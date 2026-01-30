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

### Archive Duration
`60` - 1 Hour\
`1440` - 1 Day\
`4320` - 3 Days (Only for servers with level 1 boosted)\
`10080` - 7 Days (Only for servers with level 2 boosted)

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

```admonish info title="Read more"
For more information, read the [Threads Guide](../guides/general/threads.md).
```
