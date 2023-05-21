# $editThread
Modifies an existing thread.

> 🧙‍♂️ You can use `!unchanged` as an argument for the option to remain in its current state.

## Syntax
```
$editThread[Thread ID;(Name;Archived;Archive duration;Locked;Slowmode)]
```

### Parameters
- `Thread ID` `(Type: Snowflake || Flag: Required)`: The thread channel to edit.
- `Name` `(Type: String || Flag: Optional)`: The new name of the thread.
- `Archived` `(Type: Bool || Flag: Optional)`: Whether to archive this thread or not.
- `Archive duration` `(Type: Integer || Flag: Optional)`: The archive duration of this thread in minutes. Only 60, 1440,4320, 10080 can be used. Note that for the 4320 archive duration option, the server needs to be level 1 boosted, and for 10080 the server needs level 2.
- `Locked` `(Type: Bool || Flag: Optional)`: Whether to lock this thread or not. Note that archived threads can't be locked.
- `Slowmode` `(Type: Integer || Flag: Optional)`: The slowmode of this channel, expressed in seconds.

## Example
```
$nomention
$editThread[1098166444111433819;Cool Thread 😎;no;!unchanged;!unchanged;5]
```
