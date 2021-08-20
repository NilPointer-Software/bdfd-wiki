# Threads
![example](https://user-images.githubusercontent.com/69215413/130264464-d976d579-b480-46e5-8dab-abf26a2d4829.png)

Threads are a new Discord feature which allows for subset-channels within a channel. Threads are great for separating different conversations in one channel. This wiki will explain how you can integrate threads in your bot.

### Creating a Thread
```
$startThread[name;channelID;messageID (canBeLeftEmpty);archiveDuration (60/1440/4320/10080);returnThreadID (yes/no)]
```
Starts a thread [(learn more)](https://nilpointer-software.github.io/bdfd-wiki/bdscript/startThread.html)

### Editing a Thread
```
$editThread[threadID;name;archived (yes/no);archiveDuration (60/1440/4320/10080);locked (yes/no);slowmode (in seconds)]
```
Edits a existing thread. [(learn more)](https://nilpointer-software.github.io/bdfd-wiki/bdscript/editThread.html)

### Member Thread Management

#### Adding a User to a Thread
```
$threadAddMember[threadID;userID]
```
Adds a user to the thread. [(learn more)](https://nilpointer-software.github.io/bdfd-wiki/bdscript/threadAddMember.html)

#### Removing a User from a Thread
```
$threadRemoveMember[threadID;userID]
```
Removes a user from the thread. [(learn more)](https://nilpointer-software.github.io/bdfd-wiki/bdscript/threadRemoveMember.html)

### Example
```
$var[threadID;$startThread[Cool Thread;$channelID;;1440;yes]]
I created a new thread! <#$var[threadID]>
$c[❗️This example requires BDScript 2 enabled❗️]
```

### Further Reading
If you want to learn more about threads, read [Discord's support article](https://support.discord.com/hc/en-us/articles/4403205878423-Threads-FAQ).
