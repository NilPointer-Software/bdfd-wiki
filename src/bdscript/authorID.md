# $authorID
Returns message's **author ID**. 

## Example command:
```
This command was written by <@$authorID>!
```

#### Expected output:
```
This command was written by @user!
```

#### Explanation:
Discord uses this format `<@USER_ID>` to mention user.
So for example let's say that `$authorID` is equal to `246604909451935745`.
If we'll use this `<@$authorID>` it will be replaced with `<@246604909451935745>` and discord will
interpret this as a mention *(@Noituri)*.