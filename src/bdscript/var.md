# $var
Creates a temporary variable.

Unlike, it's counterpart variables (i.e [`$setVar`](./setVar.md), [`$setUserVar`](./setUserVar.md) etc.) which needs you to create a variable in the app, [`$var[]`](./var.md) doesn't require you to do that.
Instead, it creates the variable automatically during it's runtime and gets deleted once the command execution terminates.

The data stored in the temporary variable can only be retrieved during its execution period and is removed once it's finished.

> 📌 This function can only be used in `BDScript 2` script language.

## Syntax
```
$var[Name;(Value)]
```

### Parameters
- `Name` `(Type : String || Flag : Required)` : The name of the temporary variable.
- `Value` `(Type : String || Flag : Vacantable)` : The data to store

> 📌 To retrieve the temporary stored value, type `$var[Name]`, where *"Name"* is the temporary variable name.

## Example
```
$nomention
$argsCheck[>1;Type a message!]

$var[ID;$sendMessage[$toLowercase[$message];yes]]

$addButton[no;interactionID;Example;secondary;;;$var[ID]]
```
![Example](https://user-images.githubusercontent.com/70456337/189480166-d37cbdb8-05ce-44e8-8f2e-14d030baa9a9.png)
