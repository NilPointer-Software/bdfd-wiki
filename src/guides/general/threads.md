# Threads
![example](https://user-images.githubusercontent.com/69215413/130264464-d976d579-b480-46e5-8dab-abf26a2d4829.png)

Threads are subset-channels within a channel. Threads are great for separating different conversations in one channel. This wiki will explain how you can integrate threads in your bot.

> ⚠️ In order to send a message in thread, make sure your bot has `SEND_MESSAGES_IN_THREADS` permission.

### Creating a Thread
```
$startThread[name;channelID;messageID (canBeLeftEmpty);archiveDuration (60/1440/4320/10080);returnThreadID (yes/no)]
```
Starts a thread [(learn more)](../../bdscript/startThread.md)

### Editing a Thread
```
$editThread[threadID;name;archived (yes/no);archiveDuration (60/1440/4320/10080);locked (yes/no);slowmode (in seconds)]
```
Edits an existing thread. [(learn more)](../../bdscript/editThread.md)

### Member Thread Management

#### Adding a User to a Thread
```
$threadAddMember[threadID;userID]
```
Adds a user to the thread. [(learn more)](../../bdscript/threadAddMember.md)

#### Removing a User from a Thread
```
$threadRemoveMember[threadID;userID]
```
Removes a user from the thread. [(learn more)](../../bdscript/threadRemoveMember.md)

### Example
```
$var[threadID;$startThread[Cool Thread;$channelID;;1440;yes]]
I created a new thread! <#$var[threadID]>
$c[❗️This example requires BDScript 2 enabled❗️]
```

### Further Reading
If you want to learn more about threads, read [Discord's support article](https://support.discord.com/hc/en-us/articles/4403205878423-Threads-FAQ).
