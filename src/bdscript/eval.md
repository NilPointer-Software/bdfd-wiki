# $eval
Evaluates the provided BDScript code.

> ⚠️ Can only be used in BDScript 2. This function should be used with caution!

## Syntax
```
$eval[BDScript source code]
```

### Parameters 
- `BDScript source code` `(Type: String || Flag: Emptiable)`: The code to be evaluated.

## Example
```
$nomention
$onlyForIDs[$botOwnerID;❌ Only the bot owner can use that!]
$eval[$message]
```
![example](https://user-images.githubusercontent.com/98183987/153739471-cb7a44ff-d0f1-40ac-8c26-ff2f58ffb008.jpg)

> It is recommended to restrict the command to be only used by the bot developers, this can be done with [`$onlyForIDs[]`](./onlyForIDs.md).
