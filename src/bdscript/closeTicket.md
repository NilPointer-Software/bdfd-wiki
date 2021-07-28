# $closeTicket
Deletes the ticket channel (has to be created with `$newTicket`).

## Usage
```
$closeTicket[errorMessage]
```

### Breakdown
- `errorMessage` - The error to return if the channel isn't a ticket.

## Example
```
$nomention
$closeTicket[That channel isn't a ticket!]
```
