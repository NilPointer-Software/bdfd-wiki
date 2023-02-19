# $membersCount[]

## Syntax 

`$membersCount[presence]` - returns amount of members that have their presences set

to provided presence. For example if you will use `$membersCount[online]` it will show
you amount of online members.

### Available presences: 
- `online` 
- `offline`
- `idle`
- `dnd`
- `invisible`


### Example 
```
$nomention 
there are $membersCount[online] users in this server
```


### Note
this requires the Presence Intent