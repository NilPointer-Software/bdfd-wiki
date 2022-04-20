# Ban Command
This article will take you step-by-step to create a simple or advanced ban command.

### Simple Ban Command

### Advanced Ban Command
**#1:** Create a command.

**#2:** Give the command a trigger, for this example, we'll make it `!ban`:

**#3:** Setting everything up.

Although we could just straight up *give* you the code, it's better to learn what it actually does. This section will break it down:

- We will use if statements to make a condition. First we'll try to find if the user provided was provided via a ID, or if the user was mentioned:
```
$if[$findUser[$message[1]]!=]
$c[Code to execute when user is found in server.]
$elseif[$userExists[$message[1]]==true]
$c[Code to execute if the user is found outside of the server (IDs only)]
$else
$c[Code to execute if no valid user is provided]
$endif
```

- Now, we must add the neccary checks to make sure there are no vurlerblities in our code (e.g. users without the ban permission using the ban command):
```
$nomention $c[Disables default author mention]
$allowMention $c[Allows mention arguments to be returned from the message function]
$allowUserMentions[] $c[Disables user ping notifications in the bot response]

$if[$findUser[$message[1]]!=]
  $var[user;$findUser[$message[1]]] $c[Just storing the user ID as a temporary variable to access it easier.]
  
  $onlyPerms[ban;You don't have the ban permission!]
  $onlyBotPerms[ban;I don't have permission to ban users!]

  $onlyIf[$rolePosition[$highestRole[$var[user]]]>$rolePosition[$highestRole[$botID]];I can't ban users with higher roles or equal to role positions!] $c[Returns a error if the bot's highest role is lower on the heirarchy than the user's role, since it can't ban users with higher roles than it has.]
  
  $onlyIf[$rolePosition[$highestRole[$var[user]]]>$rolePosition[$highestRole[$authorID]];You aren't allowed to ban users with higher roles or equal to role positions to you!] $c[Returns a error if the moderator's highest role is lower on the heirarchy than the user's role, since you can't ban users with higher roles than you.]
  
  $onlyIf[$var[user]!=$serverOwner;I can't ban the server owner!] $c[Returns a error if the user is trying to ban the owner.]


$elseif[$userExists[$message[1]]==true]
  $onlyPerms[ban;You don't have the ban permission!]
  $onlyBotPerms[ban;I don't have permission to ban users!]

$onlyIf[$isBanned[$message[1]]==false;User is already banned] $c[Returns a error if the user is already banned]
$else
Invalid user '$message[1]' provided to ban!
$endif
```
