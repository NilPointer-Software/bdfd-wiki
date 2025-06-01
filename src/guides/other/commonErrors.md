# Common BDFD Errors

---

# Error Messages Handling 

## Error message syntax

### Error function

The function that is causing the error.

**Function location:**
![Location of function](https://raw.githubusercontent.com/MayBeKurito/kuri-storage/main/wiki/error_message_syntax-function.png)


### Row and Column

- `Row`: 
The row where the error is located.
- `Column`:
The column where the error is located.

**Row and column location:**
![Location of row and column](https://raw.githubusercontent.com/MayBeKurito/kuri-storage/main/wiki/syntax_msg_error-row%26column.png)


*In this case, the row is '3' and the column '15'.*

## Argument types and flags

### Argument types

The argument type represent different values, which indicates what the argument value must be.

> You can check the argument type list [here](https://nilpointer-software.github.io/bdfd-wiki/guides/other/arguments.html#argument-types).

### Argument flags

The argument flags mark if arguments within a function may be used (or hence, not used at all).

> You can check the argument flags list [here](https://nilpointer-software.github.io/bdfd-wiki/guides/other/arguments.html#argument-flags).

---

# Expectations

## Aclaration

All error messages that are under this section  are generic, which means that may come with any function with the same argument type.

## Expected valid value

**Function code:**

```
$sendMessage[]
```

**Error message:**

`
❌ Function '$sendMessage' at '3:15' returned an error: expected valid value in position 1, got empty value
`

**Description:**

- The function requires a valid value, which means that the mentioned argument ("1") is empty and it requires a value.

*The value type depends on the function*

> This message refers to the function [$sendMessage](https://nilpointer-software.github.io/bdfd-wiki/bdscript/sendMessage.html).


## Expected arguments


**Function code:**

```
$addButton[no]
```

**Error message:**

`
❌ Function '$addButton' at '2:14' returned an error: expected at least 4 arguments, got 1
`

**Description:**

- The function requires at least 4 arguments, but has only 1, which is "no".

**Solution:**

- Add the expected arguments for the function.

> This message refers to the function [$addButton](https://nilpointer-software.github.io/bdfd-wiki/bdscript/addButton.html).


## Expected boolean


**Function code:**

```
$addButton[no;Button ID;Label;danger;No Bool Text]
```

**Error message:**

`
❌ Function '$addButton' at '2:41' returned an error: expected boolean in position 1, got 'No Bool Text'
`

**Description:**

- The function requires a boolean value, which refers to "true"/"false" or "yes"/"no".

**Solution:**

- Replace the argument of the boolean with "true"/"false or "yes"/"no".

> This message refers to the function [$addButton](https://nilpointer-software.github.io/bdfd-wiki/bdscript/addButton.html).


## Expected emoji

**Function code:**

```
$addButton[no;Button ID;Label;danger;no;invalid emoji]
```

**Error message:**

`
❌ Function '$addButton' at '2:47' returned an error: expected valid emoji in position 6, got 'invalid emoji'
`

**Description:**

- The function requires a valid emoji value, which means any text other than a emoji or discord emoji format.

**Solution:**

- Input an emoji in the valid formats.

***The discord emoji formats are three:***
1. `:emoji_name:`
2. `<:emoji_name:emoji_id>`
3. `<a:emoji_name:emoji_id>` (For animated emojis)


> This message refers to the function [$addButton](https://nilpointer-software.github.io/bdfd-wiki/bdscript/addButton.html).



## Expected snowflake

**Function code:**

```
$addButton[no;Button ID;Label;danger;no;;Invalid/no snowflake]
```

**Error message:**

`
❌ Function '$addButton' at '2:59' returned an error: expected valid emoji in position 6, got 'Invalid/no snowflake'
`

**Description:**

- This function requires a valid snowflake. A snowflake refers to a ID of any type, in this case, it's a message ID.

**Solution:**

- Input a valid ID.

***In other functions, this error may come refering to:***
- Server ID
- Category ID
- Channel ID
- Role ID
- User ID

> This message refers to the function [$addButton](https://nilpointer-software.github.io/bdfd-wiki/bdscript/addButton.html).


## Expected URL

**Function code:**

```
$image[No/Invalid URL]
```

**Error message:**

`
❌ Function '$image' at '2:22' returned an error: expected URL in position 1, got 'No/Invalid URL'
`

**Description:**

- The function requires a valid URL.

**Solution:**

- `$image`: Input a valid image URL (It must be direct to the image).

- `others`: In other functions, it will depend on the argument type.

> This message refers to the function [$image](https://nilpointer-software.github.io/bdfd-wiki/bdscript/image.html).


## Expected integer

**Function code:**

```
$description[Message;No integer]
```

**Error message:**

`
❌ Function '$description' at '2:32' returned an error: expected integer in position 2, got 'No integer'
`

**Description:**

- The function requires a valid integer.

**Solution:**

- Input an entire number.

*[Integer](https://nilpointer-software.github.io/bdfd-wiki/guides/other/arguments.html#argument-types) refers to an entire number.*

> This message refers to the function [$description](https://nilpointer-software.github.io/bdfd-wiki/bdscript/description.html)

---

## Max value smaller than min value

**Function code:**

```
$random[2;1]
```

**Error message:**

`
❌ Function '$random' at '3:15' returned an error: Maximal value can't be smaller than or equal to minimal
`

**Description:**

- This message tells that the maximum value is smaller than the minimum value.

**Solution:**

- Input a maximum value greater than the minimum value.

*In other commands that contains Min amd Max arguments, the error message may become inversed, but the meaning is the same.*

---

# Exclusive function's error messages

## $addButton function errors
<details><summary>$addButton</summary>

### Invalid enum value

**Error Message:**

`
❌ Function '$addButton' at '2:52' returned an error: expected valid enum value in position 4, got 'invalid style example'
`

**Description:**

- This message comes when the 4th argument doesn't include a valid [button style](https://nilpointer-software.github.io/bdfd-wiki/bdscript/addButton.html#button-style).

**Solution:**

- Input a valid button style.

> *The text 'invalid style example' was used to generate this error message. It will return whatever you input in the 4th argument when this error occurs.*

### Invalid link value

**Error message:**

`
❌ Function '$addButton' at '2:39' returned an error: Url in the button has to be valid
`

**Description:**

- This message comes when the button style is 'link' but the URL in the second position is invalid.

**Solution:**

1. Replace the input of the second argument with a valid URL.
2. Replace the input of the button style argument to any other button style than "link".

</details>


## $addSelectMenuOption function errors
<details><summary>$addSelectMenuOption</summary>

### Incorrect/Invalid Select menu ID

**Error message:**

`
❌ Function '$addSelectMenuOption' at '3:68' returned an error: Select menu not found
`

**Description:**

- This error comes when the select menu ID doesn't corresponds to any select menu from your code.

**Solution:**

1. Replace the Menu ID argument with the Menu ID inputted in the `$newSelectMenu`.
2. Add a `$newSelectMenu` with the same Menu ID inputted in the `$addSelectMenuOption`.
3. Add a `$addSelectMenuOption` with the same Menu ID inputted in the `$newSelectMenu`.

*This message may also appear when there is no '$newSelectMenu' in the code.*


</details>

## $addTextInput function errors

<details><summary>$addTextInput</summary>

### Invalid style input

**Error message:**

`
❌ Function '$addTextInput' at '3:43' returned an error: expected valid enum value in position 2, got 'invalid style'
`

**Description:**

- This error comes when the 2nd argument doesn't include a valid [text input style](https://nilpointer-software.github.io/bdfd-wiki/bdscript/addTextInput.html#styles).

**Solution:**

- Input a valid text input style.

</details>


---

# Discord API errors
## Most common discord's API errors.

<details><summary><strong>Missing Permissions</strong></summary>

### Missing permissions

**API error message:**

`
❌ Could not create the channel: 'HTTP 403 Forbidden, {"message": "Missing Permissions", "code": 50013}'
`

**Description:**

- This specific message refers to the failure while creating a channel, with the error message of "Missing permissions", which means that the bot doesn't have the required permissions to create a channel.


*All functions that manage external information require specific permissions, it depends on the function what the required permission is.*

> API error [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=50013).

> HTTP response [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=403).


</details>

<details><summary><strong>Cannot edit a message</strong></summary>
  
### Cannot edit a message

**API error message:**

`
HTTP 403 Forbidden, {"message": "Cannot edit a message authored by another user", "code": 50005}}
`

**Description:**

- This message means that the bot cannot change someone else's message. You may have entered the wrong message ID.

> API error [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=50005).

> HTTP response [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=403).

  </details>

<details><summary><strong>Unkown message</strong></summary>

### Unknow message

**API error message**

`
❌ Error occurred: 'HTTP 404 Not Found, {"message": "Unknown Message", "code": 10008}'
`

**Description:**

- This message means that the message was not found from the provided ID or it is not a valid message ID.

> API error [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=10008).

> HTTP response [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=404).

</details>

<details><summary><strong>Missing Access</strong></summary>
  
  ### Missing Access

`
❌ HTTP 403 Forbidden, {"message": "Missing Access", "code": 50001}
`

**Description:**

- This message means that the bot cannot receive information from a server/channel where it does not have perms.

> API error [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=50001).

> HTTP response [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=403).

</details>


<details><summary><strong>Cannot reply without permission</strong></summary>
  
  ### Cannot reply without permission

```
❌ HTTP 403 Forbidden, {"message": "Cannot reply without permission to read message history", "code": 160002}
```

**Description:**

- This message means that the bot does not have perms to use $reply[] in the channel without perm to read the channel history (`readmessagehistory`).

> API error [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=160002).

> HTTP response [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=403).

</details>


<details><summary><strong>Duplicated component</strong></summary>

### Duplicated component ID

`
Could not attach components to the response: Error:
HTTP 400 Bad Request, {"message": "Invalid Form Body", "code": 50035, "errors": {"components": {"0": {"components": {"1": {"custom_id": {"_errors": [{"code": "COMPONENT_CUSTOM_ID_DUPLICATED", "message": "Component custom id cannot be duplicated"}]}}}}}}}
`

**Description:**

- This message means that the custom ID is duplicated and can't be added.

*This message comes with any component (Button/Menu/Modal)*

> API error [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=50035)

> HTTP response [reference](https://discord.com/developers/docs/topics/opcodes-and-status-codes#:~:text=400).

</details>
