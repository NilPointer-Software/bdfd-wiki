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

```admonish info title="Read more"
For more information, read the the [Threads Guide](../guides/general/threads.md).
```
