# $editThread
Modifies a existing thread.

## Usage
```
$editThread[threadID;name;archived (yes/no);archiveDuration (60/1440/4320/10080);locked (yes/no);slowmode (in seconds)]
```

### Breakdown
- `threadID` - The thread channel to edit.
- `name` - The new name of the thread.
- `archived` - Whether to archive this thread or not.
- `archiveDuration` - The archive duration of this thread in minutes. Only 60, 1440,4320, 10080 can be used. Note that for the 4320 archive duration option, the server needs to be level 1 boosted, and for 10080 the server needs level 2.
- `locked` - Whether to lock this thread or not. Note that archived threads can't be locked.
- `slowmode` - The slowmode of this channel, expressed in seconds.