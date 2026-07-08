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

### Archive Duration
`60` - 1 Hour\
`1440` - 1 Day\
`4320` - 3 Days (Only for servers with level 1 boosted)\
`10080` - 7 Days (Only for servers with level 2 boosted)

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

```admonish info title="Read more"
For more information, read the [Threads Guide](../guides/general/threads.md).
```
