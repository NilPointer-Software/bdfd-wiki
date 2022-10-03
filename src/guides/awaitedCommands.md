# Awaited Commands

Awaited commands are a special type of command where the bot waits for the user's response.

![end result](https://i.imgur.com/rRRcIXA.jpg) 

> In the above screenshot, the bot asks the user to provide a number and then checks, if provided value is a number.


## Getting Started
To create an awaited command, following function and callbacks are used -

### $awaitFunc[]
`$awaitFunc` is a function. It's used to initiate an awaited command.

#### Usage
```
$awaitFunc[command name;(user ID;channel ID)]
```
- `command name` - The name which is used inside [`$awaitedCommand`](#awaitedcommand) and [`$awaitedCommandError`](#awaitedcommanderror) callback.
- `user ID` - The user the awaited command will trigger for. Uses command author, if `user ID` is not given.
- `channel ID` - The channel id where the command should be awaited. Uses current channel, if `channel ID` is not given.

### $awaitedCommand[]
`$awaitedCommand` is a callback. It gets triggered when an awaited command gets initiated.

#### Usage
```
$awaitedCommand[name;(filter)]
```
- `name` - The name which is used in [`$awaitFunc`](#awaitfunc) function.
- `filter` - It is used to limit user input. Supported filters are 
    - `<numeric>` - Accepts only number input.
    - `<word1/word2>` - Accepts only those specified words provided inside `<>`. Use `/` as separator for multiple words.
    - `empty` - Accepts any input from the user. To use this filter, keep `filter` argument empty.

### $awaitedCommandError[]
`$awaitedCommandError[]` is a callback. It gets triggered when an awaited command doesn't match with provided filter.

#### Usage
```
$awaitedCommandError[name]
```
- `name` - The name which is used in [`$awaitFunc`](#awaitfunc) function.

## Examples

- Empty Filter

   ![Screenshot_20220812_204604](https://user-images.githubusercontent.com/95774950/184388068-2d182254-79ed-45b0-962a-1dd68dc7684a.png)
   ![Screenshot_20220812_204552](https://user-images.githubusercontent.com/95774950/184388050-b9b7bdd8-1ee5-4ea4-919b-ed6dbc4849bd.png)
   ![Screenshot_20220812_205309](https://user-images.githubusercontent.com/95774950/184388088-c6ce5d6b-cbfe-4374-889c-cb2d57cbf6c5.png)

- Choice Filter

   ![Screenshot_20220813_072224](https://user-images.githubusercontent.com/95774950/184464158-083019b0-821a-4683-a969-02293b44f86a.png)
   ![Screenshot_20220813_072236](https://user-images.githubusercontent.com/95774950/184464161-62689486-928a-4aa1-900f-8ea295fc9437.png)
   ![Screenshot_20220813_072322](https://user-images.githubusercontent.com/95774950/184464163-50eac8f9-6194-4763-ac20-e18a2c97d47d.png)
   ![Screenshot_20220813_072131](https://user-images.githubusercontent.com/95774950/184464150-79857481-578f-4f4b-b725-126f35a88ad4.png)

   > ⚠️ The above example requires **BDScript 2** since it contains `$elseif`.

- Numeric Filter

   ![Screenshot_20220812_211213](https://user-images.githubusercontent.com/95774950/184392300-5fe57ba0-1d6e-4488-af7f-82aa4a82d64f.png)
   ![Screenshot_20220812_211252](https://user-images.githubusercontent.com/95774950/184392283-62ca15a3-0825-448e-bede-e8b1114af18e.png)
   ![Screenshot_20220812_211311](https://user-images.githubusercontent.com/95774950/184392271-57fd1dd6-2ff7-47de-968e-846f2dd3b7ef.png)
   ![Screenshot_20220812_211155](https://user-images.githubusercontent.com/95774950/184392254-323d07ef-7e17-4ef0-aced-852b7c3870ec.png)
