# Commands Anatomy
There are 3 main components to commands, these are: Name, Trigger and Code.

### Command Names
Think of this like a note. Command names don't impact your command at all, but they can help you find commands within the app. You can leave this field empty if you choose.

![image](https://user-images.githubusercontent.com/69215413/120053425-14ff4380-bff8-11eb-9620-bb35694a4cfa.png)

### Command Triggers
What the user types to run the command. Triggers should contain both a prefix (e.g `!`) and the actual command name (like `help`). This combines to `!help`. Do not include any spaces at the end of the trigger. Triggers are case sensitive (unless the premium function: [`$ignoreTriggerCase`](../premium/ignoreTriggerCase.md) is used in the command code). You can use [callbacks](../callbacks/introduction.md) in this field.

![image](https://user-images.githubusercontent.com/69215413/120054343-665e0180-bffd-11eb-9f29-3d64191da988.png)

### Command Code
The soul of your command. This is what the bot responds when the command is executed, you can use [functions](../bdscript/introduction.md) like `$ping` and `$message` here.

![image](https://user-images.githubusercontent.com/69215413/120054151-4843d180-bffc-11eb-8b98-3c51564d5003.png)

## Example
![image](https://user-images.githubusercontent.com/69215413/120054230-b092b300-bffc-11eb-805d-16b8b6c41cc1.png)

#### Output
![image](https://user-images.githubusercontent.com/69215413/120053639-4fb5ab80-bff9-11eb-8736-705d9d342256.png)
