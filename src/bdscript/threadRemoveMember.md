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

```admonish info title="Read more"
For more information, read the the [Threads Guide](../guides/general/threads.md).
```
