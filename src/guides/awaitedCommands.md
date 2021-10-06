# Awaited Commands
With Awaited Commands, you can await a user's response after a command.

## Breakdown
- `$awaitFunc[awaitedCommandName;(optional) userID]` - Starts a awaited command. By default, the bot awaits the author's response. You can customize which user the bot awaits by using the optional `userID` field.
- `$awaitedCommand[awaitedCommandName;filter]` - Used as a callback in a command's trigger. `$awaitedCommand[]` is used to define what happens when the user responds. The `filter` field allows you to customize which responses are accepted. Available filters:
  - `<numberic>` - Only numbers are accepted.
  - `<this/is/a/custom/filter>` Custom filter. For example, `<yes/no/maybe>` would limit the accepted responses to `yes`, `no`, or `maybe`. Filter phrases are separated using `/`, the filter must start with `<` and end with `>`.
  - Empty - Leave the `filter` field empty for no filter.
- `$awaitedCommandError[awaitedCommandName]` - Used as a callback in a command's trigger. Can be used to define what happens when the `filter` requirements aren't met.
> Check out [the example](#example) to see awaited commands in action!

## Example
`!pineapple`:

![](https://user-images.githubusercontent.com/69215413/136297136-f1fb392d-41ef-4b09-8a74-aca1045f32a3.PNG)

Awaited command:

![IMG_7383](https://user-images.githubusercontent.com/69215413/136297222-1fb844b0-1ea2-4e73-8225-1a51d94bd604.PNG)

Awaited command error:
> For this example, we're making an error message when the user gives a response that is not `yes` or `no`.

![](https://user-images.githubusercontent.com/69215413/136297541-ecc51145-e215-4dae-a58f-c9bf47ecfab0.PNG)

### Result
![](https://user-images.githubusercontent.com/69215413/136297034-bea11009-2eac-45ed-a8e9-8e2f645bb4c0.png)

### Error Result
![](https://user-images.githubusercontent.com/69215413/136297780-f7de1311-0334-4c3d-8a0f-bfa99d0ff212.png)
