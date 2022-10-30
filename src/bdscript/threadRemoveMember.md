# $threadRemoveMember
Removes a user from a thread.

## Syntax
```
$threadRemoveMember[Thread ID;User ID]
```

### Parameters
- `Thread ID`: The ID of the thread channel to remove the user from.
- `User ID`: The user to remove from the thread.

## Example
```
$nomention
$threadRemoveMember[878305123707785218;$authorID]
```
![example](https://user-images.githubusercontent.com/69215413/130261147-1d44af9b-a951-4286-88a3-1908702d3fe0.png)

## Related Resources
- [Threads Guide](../guides/threads.md)
- [$editThread](./editThread.md)
- [$startThread](./startThread.md)
- [$threadAddMember](./threadAddMember.md)
