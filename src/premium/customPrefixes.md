# Custom Prefixes
*(for premium bots)*

## Explanation
Premium gives you access to use `$getServerVar[]` in triggers. This makes it possible to make custom prefixes.

#### What Are Custom Prefixes?
Custom prefixes allow the bot's prefix (like `!`) to be changed in different servers. For example, in one server the bot's prefix could be `!` and in the other it could be `?`.

## How-To
1. Create a variable called "prefix" with the value set to the bot's default prefix. The default prefix is the prefix the bot uses if no custom one is set.

   ![image](https://user-images.githubusercontent.com/69215413/118339907-44865a00-b4e8-11eb-9e74-2f7b8f696c26.png)

2. Create a command for setting the prefix, use the code below.
     ```
     $nomention
     $onlyAdmin[❌ You need the administrator permission to use that!]
     $setServerVar[prefix;$noMentionMessage]
     Set $serverName[$guildID]'s prefix to `$noMentionMessage`
     ```
    ![image](https://user-images.githubusercontent.com/69215413/118340230-1f461b80-b4e9-11eb-8711-64c744bfc595.png)

3. Change all the command triggers to `$getServerVar[prefix]trigger-here`. For example, `!ping` would become `$getServerVar[prefix]ping`.

4. You're all set, enjoy!

    ![image](https://user-images.githubusercontent.com/69215413/118340286-41d83480-b4e9-11eb-96f7-1d8dce2d0ec4.png)
