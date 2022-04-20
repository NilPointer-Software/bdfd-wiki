# Depreacted Functions
This article displays deprecated functions, which are no longer shown on the command list. Most functions here are seemingly useless (or have been replaced with a different function), hence why they are deprecated. "Deprecated" means to 'express disapproval of'.

### $channelIDFromName
Introduced in mid-2019, `$channelIDFromName[]` was used to retrieve the channel's ID using its name. However, `$channelID[channelName]` already existed; which did the same thing as `$channelIDFromName[channelName]`. Therefore, it was deprecated and removed from the command list. However, it is still working and you can use it in your code (although you can just use `$channelID[channelName]` instead).

![](https://user-images.githubusercontent.com/69215413/143323856-2b49a23f-ae9f-41fe-ab2e-0a1b28fe2e05.png)


### $alternativeParsing
Introduced in late-2019, `$alternativeParsing` changed how arguments were read. With normal parsing, if you have two commands with names like: `help` and `helpme` and you execute the `helpme` command then both `help` and `helpme` commands are executed because both start with the same thing. But, if you use `$alternativeParsing`, only `helpme` will be executed.\
It was never officially added, but nevertheless, it still works in commands. Although, alternatives to the function like creating a condition with `$onlyIf[]` are much more stable.
> ⚠️ **Warning:** This was an experimental feature, you should not use it when making your bot.