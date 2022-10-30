# $boostCount
Returns the guild's number of nitro boosts.

## Usages
There are two usages of this function :

### Usage #1
#### Syntax
```
$boostCount
```
Returns the current guild's number of nitro boosts.

#### Example
```
$nomention
This server currently has $boostCount boost(s).
```
![example](https://user-images.githubusercontent.com/94063167/198900495-ed3261f1-b8cd-4a54-b6c5-71641108321c.png)

### Usage #2
#### Syntax
```
$boostCount[Guild ID]
```
Returns the given guild's number of nitro boosts.

#### Parameters
- `Guild ID`: The ID of the guild to get its boosts.

#### Example
```
$nomention
This server currently has $boostCount[$guildID] boost(s).
```
![example2](https://user-images.githubusercontent.com/94063167/198905185-be96ee82-9961-41c3-b042-bc663c787d58.png)
