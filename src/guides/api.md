# API
Public Bot Designer for Discord API

## Endpoints
The base URL is `https://botdesignerdiscord.com/public/api`

### GET `/function_list`
Returns an array of [functions](#Function)

### GET `/function_tag_list`
Returns an array of [function](#Function) tags

### GET `/function/:function`
- `:function` - function tag \
Returns a [function](#Function)

## Data Structures
- `Can be empty` means the field can be set to a default value.
- `Can be omitted` means the field might not be included in the response.

### Function
| Field name       | Type                            | Description                                            | Can be empty | Can be omitted |
|------------------|---------------------------------|--------------------------------------------------------|--------------|----------------|
| tag              | String                          | Function name                                          | False        | False          |
| shortDescription | String                          | Description for a function without arguments           | True         | False          |
| longDescription  | String                          | Description for a function with arguments              | True         | False          |
| arguments        | Array of [Arguments](#Argument) | Arguments needed by a function                         | True         | False          |
| intents          | Integer                         | Discord intents needed by bot to execute this function | False        | False          |
| premium          | Bool                            | function needs premium                                 | False        | False          |
| deprecated       | Bool                            | function is deprecated                                 | False        | True           |
| deprecatedFor    | String                          | Name of the function that should be used instead       | False        | True           |

### Argument
| Field name  | Type                                     | Description                                                                                 | Can be omitted |
|-------------|------------------------------------------|---------------------------------------------------------------------------------------------|----------------|
| name        | String                                   | Argument name                                                                               | False          |
| description | String                                   | Description for a function's argument                                                       | True           |
| type        | String [Argument Types](#Argument-Types) | Argument type. `\|` is used for a compound type                                             | False          |
| required    | bool                                     | Argument is required                                                                        | False          |
| tupleTypes  | Array of [Arguments](#Argument)          | Array of arguments which can be repeated, i.e `channelID;messageID;channelID;messageID;...` | True           |
| empty       | Bool                                     | Argument can be empty                                                                       | True           |
| ellipsis    | Bool                                     | Argument accepts more data, i.e `username1;username2;username3;...`                         | True           |
| enumData    | Array of Strings                         | Possible options accepted as argument, i.e `primary/secondary/or/etc`                       | True           |

### Argument Types
Multiple types can be merged together with `|` *(OR)*. \
Possible argument types:
- `String`
- `Integer`
- `Float`
- `Snowflake`
- `Bool`
- `Color`
- `Permission`
- `Duration`
- `HowMany` *(`>`, `2`, `<`, etc)*
- `URL`
- `Enum`
- `Tuple`
