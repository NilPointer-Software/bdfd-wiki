# $serverDescription[]
Returns the server's description of provided guild ID. Returns an empty result if the server has no description.

## Syntax
```
$serverDescription[Guild ID]
```

### Parameters
- `Guild ID` `(Type: Snowflake || Flag: Required)`: The server from which to get the description.

## Example
```
$nomention
Server description: $serverDescription[$message[1]]
```
![example](https://user-images.githubusercontent.com/111157596/231823496-12571db3-ba85-4e73-845c-bee765a4c4bc.png)
