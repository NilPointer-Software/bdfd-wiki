# $argsCheck
When this function is used, the command can only be executed if the user’s message contains a certain amount of words (technically referred to as "arguments" or "args").

## Usage
```php
$argsCheck[howMany;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| howMany | How many arguments there should be in the user's message. **\*** | [HowMany](/src/resources/arguments/types.md#howmany) | [Required](/src/resources/arguments/flags.md#required)
| errorMessage | The message returned if the user has too many/little arguments  provided. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

**\*** For `howMany`, if you want users to have 3 or more arguments in their message; you can use `>3`. If you want users to have less than 3 arguments in their message, you can use `<3`. If you want the users to have exactly 3 arguments in their message put `3`. 

## Example
```
$nomention
$argsCheck[>1;❌ Please provide something for me to say!]
$noMentionMessage
```
> 🤔 **Explanation:** This example, a *!say* command; only allows users to run the command if they provided 1 or more arguments in their message. If they don't provide any arguments the bot returns "❌ Please provide something for me to say!".

**When No Arguments are Provided:**

![](https://user-images.githubusercontent.com/69215413/141665918-0a94e589-3a87-4e27-ac53-3f290616782c.png)

**When Arguments are Provided:**

![](https://user-images.githubusercontent.com/69215413/141665915-4484af4f-e795-426b-a28b-b136ce68e4d6.png)

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported | 👎 Supported, but Deprecated*