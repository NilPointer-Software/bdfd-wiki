# $startThread
Creates a new thread.

## Usage
```
$startThread[name;channelID;messageID (optional);archiveDuration (60/1440/4320/10080);returnThreadID (yes/no)]
```

### Breakdown
- `name` - The name of the newly created thread.
- `channelID` - The channel that is the parent of this thread.
- `messageID` - The message that this thread is created for, can be left empty.
- `archiveDuration` - The thread archive duration in minutes. Valid options: 60, 1440, 4320, or 10080.
- `returnThreadID` - Whether to return the thread channel ID or not.

## Example
```
$var[threadID;$startThread[Cool Thread;$channelID;;1440;yes]]
I created a new thread! <#$var[threadID]>
$c[❗️This example requires BDScript 2 enabled❗️]
```

![example](https://user-images.githubusercontent.com/69215413/128615731-c61c95c1-d1ec-42cf-9964-e8722df30dfe.png)

__Explaination:__

This code is storing the newly created thread ID returned from `$startThread[]` *(using $var[]*). Then, in the rest of the code `$var[threadID]` was called to get the thread ID;  which allowed the bot to mention the new thread channel.
