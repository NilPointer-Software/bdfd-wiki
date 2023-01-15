# $isTicket
Check if the current or given channel is a ticket.

## Syntax
```
$isTicket[(channel ID)]
```
### Parameters
- `channel ID` `(Type: Snowflake || Flag: Optional)`: The channel to check. _(Defaults to the current channel)_

## Example
```
$nomention
$onlyIf[$isTicket[]==true;This command can only be used in a ticket!]
This is a ticket!
```
![example](https://user-images.githubusercontent.com/113303649/212466758-7a11f906-f356-438d-8f64-0977c28b5a3c.png)

![example](https://user-images.githubusercontent.com/113303649/212466712-3e8d1768-af20-4ea3-9402-8668ae8d9ccc.png)
> To create a ticket use the [`$newTicket[]`](./newTicket.md) function.
