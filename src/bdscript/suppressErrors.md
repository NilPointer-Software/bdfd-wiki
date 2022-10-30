# $suppressErrors
Prevents the default function error message from being sent whenever an error occurs.

## Usages
There are two usages of this function:

### Usage #1
#### Syntax
```
$suppressErrors
```
Prevents the default error message from being sent.

#### Example
```
$nomention
$suppressErrors
$argsCheck[>1;Usage : ` !command <math expression> `]
$calculate[$message]
```
![Screenshot_20221029_133343](https://user-images.githubusercontent.com/95774950/198821156-3752e153-2289-4cd8-8bfb-07ae72455530.png)

### Usage #2
#### Syntax
```
$suppressErrors[Error message]
```
Sends a custom error message instead of the default error message.

#### Parameters
- `Error message`: The custom error message to send.

#### Example
```
$nomention
$suppressErrors[**Error** : ` Invalid math expression! `]
$argsCheck[>1;Usage : ` !command <math expression> `]
$calculate[$message]
```
![Screenshot_20221029_132111](https://user-images.githubusercontent.com/95774950/198820510-bc2140f0-838b-4357-80e7-e12c69b3739f.png)

## Related Resources
- [$embedSuppressErrors](./embedSuppressErrors.md)
