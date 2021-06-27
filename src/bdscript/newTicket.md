# $newTicket
Creates a new ticket.

## Usage
```
$newTicket[categoryID/name;messageWhenNoSubject;MessageInTicket;MessageToUser;errorMessage]
```

### Breakdown
`categoryID/name` - The category to put the ticket channels in. Can be a category ID or name.
> Tip: Setup the ticket category permissions:
> ![tickets](https://user-images.githubusercontent.com/69215413/123529975-b515be80-d6c3-11eb-8f2a-28c629533e52.png)

`messageWhenNoSubject` - The message that appears in `{subject}` when the user doesn't provide a subject.

`messageInTicket` - The message that is sent in the new ticket channel.

`messageToUser` - The message that gets sent in the current channel.

`errorMessage` - The message that gets returned when the ticket can't be created.

### Subset Functions
You can use these subset functions in `$newTicket`.

- `{subject}` - Returns the ticket subject (user's message).
- `{channel}` - Mentions the new ticket channel.

## Example
```
$nomention
$newTicket[Tickets;No subject was provided.;Thanks for making a ticket. Please explain your issue in detail so we can help.
Subject: {subject}
User: <@$authorID>;Created ticket! {channel};Failed to make ticket!]
```

![example1](https://user-images.githubusercontent.com/69215413/123530091-b8f61080-d6c4-11eb-93c1-1786dc2dba99.png)

![example1](https://user-images.githubusercontent.com/69215413/123530097-cd3a0d80-d6c4-11eb-9f9f-efae06e660f2.png)

