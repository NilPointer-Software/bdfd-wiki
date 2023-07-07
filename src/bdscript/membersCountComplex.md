# $membersCount[]
Returns the amount of members in the current guild with provided presence.

## Syntax 
```
$membersCount[Presence]
```

### Parameters
- `Presence` `(Type: Enum || Flag: Required)`: Returns the amount of members that have their presences set. Presence types:
  - `online` 
  - `offline`
  - `idle`
  - `dnd`
  - `invisible`

### Privileged Intents
This function requires the following privileged intents:
- [`Presences intent`](../guides/gatewayIntents.md#presence-intent)

## Example 
```
$nomention 
there are $membersCount[online] online users in this server
```
![example](https://user-images.githubusercontent.com/70468667/219971665-9185a0b7-52e8-44eb-8d43-e5e2455bcbe3.jpg)
