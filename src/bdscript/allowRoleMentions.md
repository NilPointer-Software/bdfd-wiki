# $allowRoleMentions
Enables role pings only for the provided role IDs, while the roles not provided will be 'fake pinged' *(the role will be pinged, but users will not be notified)*.

## Usage
```
$allowRoleMentions[roleIDs]
```

### Breakdown
- `roleIDs` - The roles that can be pinged, leave empty to disable pings for every role. Separate role IDs using `;`.

## Example
```
$nomention
$allowRoleMentions[]
I'm pinging <@&858376972303204362>, but no one got notified; wow!
```

![example](https://user-images.githubusercontent.com/69215413/128615927-d93f9e54-e8ad-4067-a363-eedb540d6b37.png)
