# $membersCount[]
Returns amount of members in the current guild with provided presence.

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

![example](https://user-images.githubusercontent.com/70468667/219971665-9185a0b7-52e8-44eb-8d43-e5e2455bcbe3.jpg)


### Note
This function requires the Presence Intent

![example](https://user-images.githubusercontent.com/70468667/219971688-d8fc9a3c-a153-4073-bbef-49c8fd0a87bb.jpg)
