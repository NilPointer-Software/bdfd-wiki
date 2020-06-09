# $membersCount
This command returns number of members.

## First usage of the command
`$membersCount` - returns amount of members in current guild

## Second usage
`$membersCount[presence]` - returns amount of members that have their presences set
to provided presence. For example if you will use `$membersCount[online]` it will show
you amount of online members.

### Available presences: 
- `online` 
- `offline`
- `idle`
- `dnd`
- `invisible`
