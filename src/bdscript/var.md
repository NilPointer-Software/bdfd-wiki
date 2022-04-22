# $var
Can be only used in BDScript 2. It can be used to save a value temporarily. It doesn't require setting up a new variable in the app. The data is removed after the command is executed. If value is provided the variable is set otherwise the value is retrieved.

## Usage
```
$var[variableName;(newValue)]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| variableName | The variable name | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)
| newValue | The newly assigned variable value. **\*** | [String](/src/resources/arguments/types.md#string) | [Vacantable](/src/resources/arguments/flags.md#vacantable)

**\*** If the argument is present, this will set the value of the variable. If the argument is not present, it will return the value of the temporary variable.

## Examples
### Example #1
> Stores the response in a variable, then calls the variable to set the response.
```
$nomention
$var[message;Hello World!]
$var[message]
```

### Example #2
> Creates a channel then responds with it's mention.
```
$nomention
$var[channelName;insert-channel-name-here]

$async[creation]
$createChannel[$var[channelName];text]
$endasync

$await[creation] $c[Awaits the channel being created]

Created channel <#$channelID[$var[channelName]]>!
```

### Example #3
> Creates a role then responds with it's mention.
```
$nomention
$var[roleName;insert role name]

$async[creation]
$createRole[$var[roleName];0;no;no]
$endasync

$await[creation] $c[Awaits the role being created]

Created role <@&$roleID[$var[roleName]]>!
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ❌ |
| BDScript 2 | ✅ |
| BDScript Unstable | ❌ |

*✅ Supported | ❌ Unsupported*
