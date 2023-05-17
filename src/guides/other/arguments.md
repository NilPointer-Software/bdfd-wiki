## Argument Flags
Function argument flags mark how arguments within a function may be used (or hence, not used at all), it will be displayed near or below the function argument.
Example: (- `userID` `(Flag: Required)`) etc.

- __Optional__ - The argument **can** be excluded but **cannot** be left empty, they show up as `(something)` and will **always** be after all required arguments.
- __Required__ - The argument **must** be included and **cannot** be empty.
- __Emptiable__ - The argument **must** be included but **can** be empty.
- __Vacantable__ - The argument **can** be excluded and if included **can** be empty.


## Argument Types
This section will explain the various argument types used for function arguments. Function arguments are anything that goes in the brackets `[]` of a function, it will be displayed near or below the function argument.
Example: (- `userID` `(Type: Snowflake || Flag: Required)`) and if it has more than one option it will be `(Type: String, Snowflake || Flag: Required)` etc.

- __String__ - This is the most generalized function, a string can be any character or text.
- __Snowflake__ - A valid discord ID, can be of a role, channel, user, server, emoji and message.
- __Integer__ - Any number without decimal (-5, -1, 1, 5 10, etc).
- __Float__ - A number with decimal (-2.5, -0.5, 1.5, 5.2, 7.30, etc).
- __URL__ - A valid domain link, **must** be prefixed by `http://` or `https://` and have a valid domain name.
- __HowMany__ - A number that is prefixed or suffixed with < or >, or just a plain integer.
- __Enum__ - Strings that match a certain key value (case insensitive).
- __Emoji__ - Emoji as 🌹 or the discord custom emojis in form of `<a:emoji_name:emoji-id>` for gif emojis and `<:emoji_name:emoji-id>` for non-gif emojis, for how to get that, check [$addReactions](../../bdscript/addReactions.md) as it has explanations for that. Characters `<>` can be omitted from the discord custom emoji form.
- __Duration__ - A time based duration, an integer suffixed with a valid time format (s, m, h, d, w).
- __Permission__ - Discord permission (case insensitive), see [this](../../resources/permissions.md) for all valid permissions.
- __Bool__ - yes/no or true/false.
- __Color__ - Color Hex Code you can get from [here](https://htmlcolorcodes.com/color-picker) as an example


## Pairs
- __Tuple__ - A tuple is a set of arguments that depend on others to function, they are shown with `<>` on either side.
- __Ellipsis__ - Ellipsis notations (`...`) symbolize an argument that can be repeated multiple times. Ellipsis is denoted with `...` as the argument after the argument which can be repeated.
