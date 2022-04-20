# $newTicket
Creates a new ticket.
> 🧠 **Tip:** To close a ticket, use [`$closeTicket[]`](./closeTicket.md).

## Usage
```php
$newTicket[categoryID/name;noSubjectMessage;ticketMessage;messageToUser;errorMessage]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| categoryID/name | The category to put the ticket channels in. **\*** | [String](/src/resources/arguments/types.md#string) \| [Snowflake](/src/resources/arguments/types.md#snowflake) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| noSubjectMessage | Text in `{subject}` when the user doesn't provide a subject. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| ticketMessage | The message that is sent in the new ticket channel. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| messageToUser | The message that gets sent in the current channel. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| errorMessage | The message when the ticket can't be created. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)
| ticketNumber | A custom ticket number. **\*** | [Integer](/src/resources/arguments/types.md#integer) | [Optional](/src/resources/arguments/flags.md#optional)

**\*** A random integer will be generated if `ticketNumber` is not provided.

### Subset Functions
You can use these subset functions in [`$newTicket[]`](./newTicket.md).
- `{subject}` - Returns the ticket subject (the user's message).
- `{channel}` - Mentions the new ticket channel.

## Example
```
$nomention
$newTicket[Tickets;No subject was provided.;Thanks for making a ticket. Please explain your issue in detail so we can help.
Subject: {subject}
User: <@$authorID>;Created ticket! {channel};Failed to make ticket!]
```

![](https://user-images.githubusercontent.com/69215413/123530091-b8f61080-d6c4-11eb-93c1-1786dc2dba99.png)

![](https://user-images.githubusercontent.com/69215413/123530097-cd3a0d80-d6c4-11eb-9f9f-efae06e660f2.png)