# If Statements
In this section, you'll learn how to use the if statement.

## Content
[**Functions Used**](#functions-used) > [**Signs**](#signs) > [**$if[]**](#if) > [**$endif[]**](#endif) > [**$else**](#else) > [**$elseif[]**](#elseif) > [**$and**](#and) > [**$or[]**](#or) > [**Simple Example**](#simple-example)

## Functions Used
- [`$if[]`](../../../../bdscript/if.md)
- [`$endif`](../../../../bdscript/endif.md)
- [`$else`](../../../../bdscript/else.md)
- [`$elseif[]`](../../../../bdscript/elseifComplex.md)

## Support Functions Used
- [`$and`](../../../../bdscript/and.md)
- [`$or`](../../../../bdscript/or.md)

### Signs
`==` - Equal

`!=` - Not equal

`<` -  Less than

`>` - Greater than

`>=` - Greater than or equal to

`<=` - Less than or equal to
- These signs could vary in meaning based on the order or intent of the if statement.
- If you are using text as your `x` and/or `y`, you can not use any other signs besides `==` and `!=`. However for numbers, you can use any sign shown in the above list.

# $if
Executes the following block of code if the provided condition is `true`.

## Syntax
```
$if[Condition]
```
> `$if[]` uses the format of: if `x` is related accordingly (based on the "sign") with `y` then the code below runs.

### Parameters
- `Condition` `(Type: String || Flag: Required)`: Check that will be carried out. Use [Signs](#signs).
## Example
```
$nomention
$if[5>$random[0;10]]
  5 is bigger than $random[0;10]
$endif
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    5 is bigger than 0
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    No answer because $random[0;10] returned that the number are less than 5
```
\

# $endif
Ends an if statement.

## Syntax
```
$endif
```
## Example
```
$nomention
$if[$message==abc]
  Good work!
$endif
```

### With `$endif`
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example abc
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Good work!
```
\
### Without `$endif`
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example abc
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <code>$if</code> not closed with <code>$endif</code>
```
\

# $else
A block of code to be executed, if the `$if[]` condition is `false`.

## Syntax
```
$else
```
## Example
```
$if[5>$random[0;10]]
  5 is bigger than $random[0;10]
$else
  5 is less than $random[0;10]
$endif
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    5 is bigger than 0
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    5 is less than 8
```
\

# $elseif
Checks provided condition only if previous `$if[]` or `$elseif[]` conditions returned `false`. If the provided condition is `true`, the following block of code will be executed.
> You can use multiple `$elseif`s.
> Only for **BDScript 2**!

## Syntax
```
$elseif[Condition]
```
### Parameters
- `Condition` `(Type: String || Flag: Required)`: Check that will be carried out. Use [Signs](#signs).
## Example

**BDScript 2:**
```
$nomention
$if[5<$random[0;10]]
  5 is less than $random[0;10]
$elseif[5==$random[0;10]]
  5 equals $random[0;10]
$endif
```
**BDScrpt and BDScript Unstable:**
```
$nomention
$if[5<$random[0;10]]
  5 is less than $random[0;10]
$else
  $if[5==$random[0;10]]
    5 equals $random[0;10]
  $endif
$endif
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    5 is less than 6
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    5 equals 5
```
\

# $and
Returns `true` if every provided condition is `true`, otherwise `false` is returned.

## Syntax
```
$and[Conditions;...]
```
### Parameters
- `Conditions` `(Type: String || Flag: Required)`: Checks that will be carried out. All conditions must be true for this function to return `true`. Separate conditions using `;`. Use [Signs](#signs).

## Example
```
$nomention
$if[$and[$nickname==MineBartekSA;$message==Update]==true]
  Hi developer
$else
  Hi user
$endif
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example Update
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi user
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi user
- user_id: 154148273307910144
  username: MineBartekSA
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/1ecd3b3a-4bdf-441a-98ad-361254426a74
  color: "#f1bdee"
  content: |
    !example 
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi user
- user_id: 154148273307910144
  username: MineBartekSA
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/1ecd3b3a-4bdf-441a-98ad-361254426a74
  color: "#f1bdee"
  content: |
    !example Update
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi developer
  ```

# $or
Returns `true` if at least one of the provided conditions is `true`, otherwise `false` is returned.

## Syntax
```
$or[Conditiona;...]
```
### Parameters
- `Conditiona` `(Type: String || Flag: Required)`: The condition to check. Separate conditions using `;`. Use [Signs](#signs).

## Example
```
$nomention
$if[$or[$nickname==MineBartekSA;$message==Update]==true]
  Hi
$else
  Bye
$endif
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example Update
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Bye
- user_id: 154148273307910144
  username: MineBartekSA
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/1ecd3b3a-4bdf-441a-98ad-361254426a74
  color: "#f1bdee"
  content: |
    !example 
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi
- user_id: 154148273307910144
  username: MineBartekSA
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/1ecd3b3a-4bdf-441a-98ad-361254426a74
  color: "#f1bdee"
  content: |
    !example Update
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi
  ```

# Simple Example
1. Create command with `!example` trigger.
2. Paste the following code:
   ```
   $nomention
   $if[$message==BDFD]
     Hi BDFD User!
   $elseif[$message==Bartek]
     Are you Bartek?
   $elseif[$message==Premium]
     Do you want to get premium?
   $else
     I can't find this:(
   $endif
   ```
3. Execute command `!example`
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example BDFD
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Hi BDFD User!
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example Bartek
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Are you Bartek?
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example Premium
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Do you want to get premium?
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example Hello
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    I can't find this:(```
```
\
