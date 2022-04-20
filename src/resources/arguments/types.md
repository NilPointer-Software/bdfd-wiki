# Argument Types
This article will explain the various argument types used for function arguments. Function arguments are anything that goes in the brackets `[]` of a function.

### String
Strings are the most generalized argument type in *Bot Designer for Discord*. Strings can contain letters, numbers, and/or symbols. However, different function arguments may require the string to resolve to something else; e.g. an emoji.

**Examples:**
- Hello World!
- Just some text 123.

### Snowflake
A valid Discord user/server/channel/role/message/etc ID.

For example, `$banID[reason;userID]`, `userID` is a Discord User ID, so the 'userID' argument must resolve to a valid user ID. `$banID[reason;$mentioned[1]]` would work if the user mentions a user in their message, since `$mentioned[1]` will hold that mentioned user's ID.

### Integer
Any number that doesn't have a decimal. Maybe negative in some cases, but usually will be positive.

**Examples:**
- 10
- 25
- 1

### Float
A number with decimals. Commonly, floats and integers are both accepted; but in some cases, just integers or just floats are accepted.

**Examples:**
- 10.5
- 25.25
- 1.9

### Tuple
A set of arguments that depend on each other to function.

### URL
A link, like https://botdesignerdiscord.com or https://google.com. URLs must start with `https://` or `http://` before the actual domain *(so `google.com` wouldn't work, while `https://google.com` would)*.

### HowMany
A number which is prefixed or suffixed with `>` (great than) or `<` (less than), or just a plain integer. 

**Examples:**
- `>2` or `2>` (greater than 2)
- `<2` or `2<` (less than 2)
- `2` (exactly 2)

### Enum
Strings that are given matching a certain type. (case-insensitive).

For example, if there was a function named `$example` and it's usage was `$example[type]`. 'type' would only allow for certain types, so let's say that the 'type's can be 'option1', 'option2', or 'option3'. Then, `$example[option1]`, `$example[option2]`, `$example[option3]` would all work. Inputting an invalid enum commonly results in the function returning a error.

### Duration
A time-based duration using a mix of numbers and letters. `<number><suffix>`, e.g. `1h` for 1 hour. The possible suffixes are `s` (for seconds), `m` (for minutes), `h` (for hours), `d` (for days), `w` (for weeks).\
If you don't use a suffix, then the number will be interpreted as seconds.

**Examples:**
- 12h
- 1d
- 10m

### Permission
A Discord permission (case-insentive). [See full list of permission here (click-me)](/src/resources/permissions.md)

**Examples:**
- ban
- managemessages
- managenicknames

> 🗒️ **Note:** For `$modifyChannelPerms`, permissions must be denoted with a `+` (add permission) or `-` (negate permission). For example, `-sendmessages` or `+sendmessages`. Also, `$modifyChannelPerms` is a channel permission-based function; meaning it can only add/negate channel-based permissions.

### Bool
Either `yes`/`no`, or `true`/`false`. 

### Color
A color integer or hex. You can find color hexes here: [htmlcolorcodes.com/color-picker](https://htmlcolorcodes.com/color-picker). Color hexes can be denoted with or without the `#` prefix.

**Examples:**
- `#FF0000` (color hex for red) 
- `#FFC0CB` (color hex for pink)
- `#0000FF` (color hex for blue)