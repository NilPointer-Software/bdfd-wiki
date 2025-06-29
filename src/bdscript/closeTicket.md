# $closeTicket
Deletes the ticket channel (has to be created with `$newTicket`).

## Syntax
```
$closeTicket[Error message]
```

### Parameters
- `Error message` `(Type: String || Flag: Emptiable)`: The error to return if the channel isn't a ticket.

## Example
```
$nomention
$closeTicket[That channel isn't a ticket!]
```
