# $reply
Replies to the user's command

## Usage
```
$reply
```

## Usage #2
```
$reply[Channel ID;Message ID]
```
### Breakdown
- `Channel ID` - The channel where to find `Message ID` in.
- `Message ID` - The message to reply to.

## Example
```
$nomention
$reply
Hello $username 👋🏻
```

### Example
With `$reply`:

![image](https://user-images.githubusercontent.com/42785890/151721130-51524143-b136-4cfc-b028-694b1d09e84a.png)

Without `$reply`:

![image](https://user-images.githubusercontent.com/42785890/151721184-6fa5846c-9ffb-47bb-bf82-0973e0caa3e9.png)

## Example #2
```
$nomention
$reply[1015287764385808524;1036936363016204339]
Replied
```

![image](https://user-images.githubusercontent.com/113247745/199205538-8cba8ff3-9aa4-4bbd-b8f9-7e8248f10667.png)
