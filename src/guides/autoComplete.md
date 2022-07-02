# Auto Complete for Slash Command Options
Auto complete allows your bot to read user input as they type it and give user suggestions based on that.
![example-autocomplete](https://user-images.githubusercontent.com/16838075/177011403-6cfa02e5-ae59-4c8b-895d-219eaa4b8e7f.png)\
Check [example](#Example) to get started quickly.

## General Information
- You can only create up to 25 suggestions per option
- You need to enable autocomplete for the option
- You can't use option choices with autocomplete

## `$onAutoComplete[command name]` callback
This callback receives information about current user input. It's used for adding suggestions.\
`command name` is the name of a slash command.

## Avaliable functions
### `$appendOptionSuggestion[name;suggestion]`
Used for adding new suggestions.
- `label` - text which will be displayed in the suggestion list (for example: `arg-ad` from the previous [example](#Auto-Complete-for-Slash-Command-Options))
- `value` - data that can be accessed in a slash command by using `$message[]` function. `label` is only a display name but `value` holds the actual value for a suggestion.

> **Note:** `value` must have the same type as the currently typed option! Meaning, if the option's type is `Integer`, `value` can't be set to `Hello` but it can be set to `123`

### `$autoCompleteOptionName`
Returns the name of currently being typed option. For example `arg` from the previous [example](#Auto-Complete-for-Slash-Command-Options)

### `$autoCompleteOptionValue`
Returns the current user input. For example `ad` from the previous [example](#Auto-Complete-for-Slash-Command-Options)

## Example
### New slash command with a new option:
![slash auto complete](https://user-images.githubusercontent.com/16838075/177012583-e5feef81-0fe7-43ee-8a8d-c31480e8ab76.jpg)

### Slash option:
![slash option](https://user-images.githubusercontent.com/16838075/177012795-c1ba74a8-01e6-4d84-abf5-6de91e47628c.jpg)

### Slash command code:
```php
$message[arg]
```

### `$onAutoComplete[]` callback:
![autocompletetrigger](https://user-images.githubusercontent.com/16838075/177012879-d5628680-eac6-4d4a-a25a-5f04e887feb3.jpg)

### Callback code
```php
$nomention
$appendOptionSuggestion[$autoCompleteOptionName-$autoCompleteOptionValue;$autoCompleteOptionValue]
```

##### Explanation
- `$appendOptionSuggestion[]` - adds new suggestion
- `$autoCompleteOptionName-$autoCompleteOptionValue` - suggestion's label. It's set to the option name and user input (`<option name>-<user input>`)
- `$autoCompleteOptionValue` - suggestion's value. It's set to whatever user typed.

### Result:
#### 1. 
![example-autocomplete](https://user-images.githubusercontent.com/16838075/177013084-4c8d4049-3022-4ff9-af16-4700a9756b82.png)
#### 2.
![example-autocomplete2](https://user-images.githubusercontent.com/16838075/177013098-a95f39f3-7d26-4a2c-96eb-5c9e42e28e60.png)




