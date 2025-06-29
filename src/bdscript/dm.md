# $dm
Direct messages the user who runs the command.

<style>
.discord-messages {
    margin-top: 1.5rem;
}

.discord-messages > .discord-message:before {
    color: var(--color1);
    background: var(--color3);
    border-radius: 10px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: -1.8rem;
    margin-top: -.9rem;
    width: fit-content;
    transition: .3s;
    z-index: 1000;
}

.discord-messages > .discord-message:before {
    content: 'RainbowKey`s DM';
}

.discord-messages:first-of-type > .discord-message:before {
    content: '#main-chat';
}

.discord-messages > .discord-message:hover:before {
    transform: scale(1.025);
    transform: rotate(-2.5deg);
    border-radius: 12.5px;
    transition: .3s;
}
</style>

## Syntax
```
$dm
```

## Example
```
$nomention
$dm
Hello!
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
```

``` discord yaml
- user_id: 1009018156494368798
  username: BDFD Support
  bot: true
  verified: true
  content: |
    Hello!
```

```admonish failure
If the command fails to send the message, make sure you allow direct messages from everyone.
```
