# DM Only Commands
To make it so a command can only be ran within direct messages, not servers, you can use the code snippet below:
```
$onlyIf[$channelType[$channelID]==dm;]
```

You can also specify an error message to return if the code is ran in a server, and not a direct message:
```
$onlyIf[$channelType[$channelID]==dm;Your error message here]
```

> 🗒️ **Note:** These code snippets should go at the top over your command's code if you're using BDScript or BDScript 2, or at the bottom if you're using BDScript Unstable [(learn more about limiter hoisting)](/src/guides/scriptingModes.md#limiter-hoisting).