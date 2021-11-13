# $var
Can be used to *temporarily* store a value. After the command executes, all of the temporary variables are deleted. For this specific variable function, you don't need to create a corresponding variable in the application.

> **Warning: This function requires [BDScript 2](/src/guides/bdscript2.md) mode enabled in order to work!**

## Usage
```
$var[name;value]
```

### Breakdown
- To store a value, you use `$var[variableName;value]`.
- To retrieve the value of a temporary variable, you use `$var[variableName]`.
> **Note:** Variables must be set before they are retrieved.

## Examples
### Example #1
*Stores the response in a variable, then calls the variable to set the response.*
```
$nomention
$var[message;Hello World!]
$var[message]
```

### Example #2
*Creates a channel then responds with it's mention.*
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
*Creates a role then responds with it's mention.*
```
$nomention
$var[roleName;insert role name]

$async[creation]
$createRole[$var[roleName];0;no;no]
$endasync

$await[creation] $c[Awaits the role being created]

Created role <@&$roleID[$var[roleName]]>!
```