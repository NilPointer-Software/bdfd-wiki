# $and
Returns 'true' if every provided condition is true, otherwise 'false' is returned.

## Usage
```
$and[condition1;condition2;etc]
```

## Example
```
$nomention
$if[$and[$username==noituri;$message==update]==true]
Noit said "Update"!
$endif
$c[The code in the if statement only executes if the user's username is 'noituri', and the message content is 'update'.]
```
