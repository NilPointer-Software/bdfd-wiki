# If Statements
Interprets commands conditionally.
Every **if statement** starts with `$if[condition]` and has to end with `$endif`.
`$else` is optional.

## Breakdown
- Use `$if[]` to specify a block of code to be executed, if a specified condition is true.
- Use `$else` to specify a block of code to be executed, if the same condition is false.
- Use `$elseif[]` to specify a new condition to check, if the first condition is false **(can be only used in BDScript 2)**
- Use `$else` and `$if[]` to specify a new condition to check, if the first condition is false.
- Use `$endif` to end a if statement.

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

## Explaination
`$if[]` uses the format of: if `x` is related accordingly (based on the "sign") with `y` then the code below runs.

### Signs
`==` - Equal

`!=` - Not Equal

`<` -  Less Than

`>` - Greater Than

`>=` - Greater Than Or Equal To

`<=` - Less Than Or Equal To

- These signs could vary in meaning based on the order or intent of the if statement.
- If you are using text as your `x` and/or `y`, you can not use any other signs besides `==` and `!=`. However for numbers, you can use any sign shown in the above list.

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

