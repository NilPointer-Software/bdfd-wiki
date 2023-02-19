# $editThread
Modifies a existing thread.

## Usage
```
$editThread[threadID;(name;archived;archiveDuration;locked;slowmode)]
```

### Parameters
- `threadID` `(Type: Snowflake || Flag: Required)`: The thread channel to edit.
- `name` `(Type: String || Flag: Optional)`: The new name of the thread.
- `archived` `(Type: Bool || Flag: Optional)`: Whether to archive this thread or not.
- `archiveDuration` `(Type: Integer || Flag: Optional)`: The archive duration of this thread in minutes. Only 60, 1440,4320, 10080 can be used. Note that for the 4320 archive duration option, the server needs to be level 1 boosted, and for 10080 the server needs level 2.
- `locked` `(Type: Bool || Flag: Optional)`: Whether to lock this thread or not. Note that archived threads can't be locked.
- `slowmode` `(Type: Integer || Flag: Optional)`: The slowmode of this channel, expressed in seconds.