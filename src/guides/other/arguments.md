# Argument Flags
Function argument flags indicate how arguments within a function may be used, or if they are optional or required.

| Flags        | Description                                                                                           |
|--------------|-------------------------------------------------------------------------------------------------------|
| Optional     | The argument can be excluded, but cannot be left empty. It is displayed as `(something)` in usage.    |
| Required     | The argument must be included and cannot be empty.                                                     |
| Emptiable    | The argument must be included, but can be empty.                                                        |
| Vacantable   | The argument can be excluded, and if included, it can be empty.                                        |

# Argument Types
This section explains the various argument types used for function arguments. Arguments are values placed within `[]` in a function, and they are displayed near or below the function.

| Types        | Description                                                                                           |
|--------------|-------------------------------------------------------------------------------------------------------|
| String       | A general-purpose argument that can contain any characters or text.                                   |
| Snowflake    | A valid Discord ID, such as a role, channel, user, server, emoji, or message.                         |
| Integer      | A whole number without a decimal point (e.g., -5, -1, 1, 5, 10, etc.).                                |
| Float        | A number with a decimal point (e.g., -2.5, -0.5, 1.5, 5.2, 7.30, etc.).                                |
| URL          | A valid URL with the prefix `http://` or `https://` and a valid domain name.                          |
| HowMany      | A number that can be prefixed or suffixed with `<` or `>`, or a plain integer.                        |
| Enum         | Strings that match specific key values (case insensitive).                                            |
| Emoji        | An emoji represented as 🌹 or in the format `<a:emoji_name:emoji-id>` for gif emojis and `<:emoji_name:emoji-id>` for non-gif emojis. |
| Duration     | A time-based duration, represented by an integer followed by a valid time format (s, m, h, d, w).      |
| Permission   | A Discord permission (case insensitive). See [here](../../resources/permissions.md) for valid permissions. |
| Bool         | A boolean value represented as yes/no or true/false.                                                  |
| Color        | A color hex code, which can be obtained from [here](https://htmlcolorcodes.com/color-picker), for example. |

# Argument Pairs

| Pairs        | Description                                                                                           |
|--------------|-------------------------------------------------------------------------------------------------------|
| Tuple        | A set of arguments that depend on each other to function, displayed with `<>` on either side.         |
| Ellipsis     | Ellipsis notation (`...`) represents an argument that can be repeated multiple times.                 |
