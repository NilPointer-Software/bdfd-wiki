# $authorID
Returns message's author ID. 

## Usage
```
$authorID
```

## Example
```
$nomention
This command was written by <@$authorID>!
```

### Explanation
Discord uses this format: `<@USER_ID>` to mention users. For example, let's say that `$authorID` is equal to `246604909451935745`. 
If we use this: `<@$authorID>`, it will be replaced with `<@246604909451935745>` and discord will interpret this as a mention *(@Noituri)*.
