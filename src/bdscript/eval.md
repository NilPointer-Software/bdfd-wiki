# $eval
Evals BDScript code.
> `$eval` can only be used in [BDScript 2](https://nilpointer-software.github.io/bdfd-wiki/guides/bdscript2.html)!

## Usage
```
$eval[code]
```

⚠️ **Notice!**

Functions with `$eval` should be only useable by the developer of the bot. If `$onlyForIDs` is not used, your bot could be in serious risk of being abused.

### Breakdown
`code` - The code to execute.

## Example
```
$nomention
$onlyForIDs[YOUR_USER_ID;You can't use that!]
$eval[$message]
```
