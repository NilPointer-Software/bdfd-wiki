# $slashID
Returns ID of a slash command.

## Usages
There are two usages of this function:

### Usage #1
#### Syntax
```
$slashID
```
Returns ID of the executed slash command.

#### Example
```
$nomention
ID of this slash command: $slashID
```
![Without](https://user-images.githubusercontent.com/70456337/191593122-4fd47d30-f108-4b4a-b44b-b1f3b5df9980.png)

### Usage #2
#### Syntax
```
$slashID[Slash command name]
```
Returns ID of the provided slash command.

##### Parameters 
- `Slash command name` `(Type: String || Flag: Required)`: Name of the global slash command.

#### Example
```
$nomention
ID of `$message` slash command: $slashID[$message]
```
![With](https://user-images.githubusercontent.com/70456337/191593196-6ec89d57-a84c-47d8-b982-63aa3471b40d.png)
