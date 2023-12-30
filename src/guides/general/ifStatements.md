# If Statements
Interprets commands conditionally.

## Content
[**Functions Used**](#functions-used) > [**Signs**](#signs) > [**$if[]**](#if) > [**$endif[]**](#endif) > [**$else**](#else) > [**$elseif[]**](#elseif) > [**Simple Example**](#simple-example)

## Functions Used
- [`$if[]`](../../../../bdscript/if.md)
- [`$endif`](../../../../bdscript/endif.md)
- [`$else`](../../../../bdscript/else.md)
- [`$elseif[]`](../../../../bdscript/elseifComplex.md)

### Signs
`==` - Equal

`!=` - Not Equal

`<` -  Less Than

`>` - Greater Than

`>=` - Greater Than Or Equal To

`<=` - Less Than Or Equal To

# $if
Executes the following block of code if the provided condition is `true`.

## Syntax
```
$if[Condition]
```
### Parameters
- `Condition` `(Type: String || Flag: Required)`: Check that will be carried out.
## Example
```
$nomention
$if[5>$random[0;10]]
  5 is bigger than $random[0;10]
$endif
```

## Examples:

```
$if[$username==kubastick]
  Hi Kuba!
$else
  Hi $username!
$endif
```

```
$if[$getUserVar[money]>0]
  You're not broke
$endif
```

```
$if[$username==noituri]
  $if[$message[<]==nice]
    Noit said nice
  $endif
$endif
```

*Only for BDScript 2:*
```
$if[$message==test]
  You said test
$elseif[$message==BDFD]
  Bot Designer for Discord
$elseif[$username==noituri]
  Hi Noituri!
$else
  I don't know what to say
$endif
```

> **Note:** You can use multiple `$elseif`s

## Explanation
`$if[]` uses the format of: if `x` is related accordingly (based on the "sign") with `y` then the code below runs.

### Base Usage
```
$if[value-x(sign)value-y]
```

## Else If
`$elseif` can be only used in **BDScript 2**. If you use different BDScript edition please read the note below.
> **Note:** Normal BDScript and BDScript Unstable don't have a specific function for else if blocks, but you can still do them by using `$else` and `$if[]`. The difference between `$else` and `$elseif[]` is that `$else` doesn't need a condition. Where as `$elseif[]` is still an `$if[]` so it needs a condition. The main purpose for `$elseif[]` is to make it so only one if statement runs. Unlike regular if statements, the else if blocks should end with `$else` then start with another `$if[]`. Once you are done with your else if statements, close all of them with x number of `$endif`s (`x` = number of else if statements) at the bottom of the last else if statement.

### Example Else If for **Normal BDScript and BDScript Unstable**
```
$if[$checkContains[$message;hi]==true]
Hello

$else
$if[$checkContains[$message;yes]==true]
Sure!

$endif
$endif
```

