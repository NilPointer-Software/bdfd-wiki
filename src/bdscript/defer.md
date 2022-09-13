# $defer
Defers response to an interaction from components and slash commands.

## Usage
```
$defer
```

### Example
Sometimes the code we make needs more time to fully execute.
In normal cases, the bot will just respond to you after a while, but only if it's not an interaction.
Interactions have a wait timeout of up to 3 seconds.
But `$defer` changes this timeout to 15 minutes, giving the bot a chance to completely finish executing the code.
Below is an example of code that will take more than 3 seconds to execute.
```
$nomention

$title[$getEmbedData[$channelID;$message[message-id];1;title];1]
$description[$getEmbedData[$channelID;$message[message-id];1;description];1]
$footer[$getEmbedData[$channelID;$message[message-id];1;footer];1]
$color[$getEmbedData[$channelID;$message[message-id];1;color];1]

$title[$getEmbedData[$channelID;$message[message-id];2;title];2]
$description[$getEmbedData[$channelID;$message[message-id];2;description];2]
$footer[$getEmbedData[$channelID;$message[message-id];2;footer];2]
$color[$getEmbedData[$channelID;$message[message-id];2;color];2]
```
Let's execute it.

#### Without `$defer`

![Without](https://user-images.githubusercontent.com/70456337/189966580-203e3626-02e5-47a6-a649-07ff55079414.gif)

#### With `$defer`
```
$nomention
$defer

$title[$getEmbedData[$channelID;$message[message-id];1;title];1]
$description[$getEmbedData[$channelID;$message[message-id];1;description];1]
$footer[$getEmbedData[$channelID;$message[message-id];1;footer];1]
$color[$getEmbedData[$channelID;$message[message-id];1;color];1]

$title[$getEmbedData[$channelID;$message[message-id];2;title];2]
$description[$getEmbedData[$channelID;$message[message-id];2;description];2]
$footer[$getEmbedData[$channelID;$message[message-id];2;footer];2]
$color[$getEmbedData[$channelID;$message[message-id];2;color];2]
```

![With](https://user-images.githubusercontent.com/70456337/189966702-1dafdaf5-f706-419a-a150-c7eead0c0e17.gif)
