# $closeTicket
Deletes the ticket channel (the channel must be created with [`$newTicket[]`](./newTicket.md)).

## Usage
```php
$closeTicket[errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| errorMessage | The error to return if the channel isn't a ticket. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Example
```
$nomention
$closeTicket[That channel isn't a ticket!]
```

## Specifications
| Scripting Mode | Status
| :---- | :---- |
| BDScript | ✅ |
| BDScript 2 | ✅ |
| BDScript Unstable | ✅ |

*✅ Supported | ❌ Unsupported*