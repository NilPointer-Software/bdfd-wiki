# $addContainer
Adds a container body to the message.

## Syntax
```
$addContainer[Container name;(Color hex;Spoiler?)]
```

```admonish warning title="Limit"
A message can have a maximum of 20 container bodies (40 container components).
```

### Parameters
- `Container name` `(Type: String || Flag: Required)`: Name for attaching other container components to container body.
```admonish warning
You can't have multiple containers **with the same name** in one message.
```

- `Color hex` `(Type: Color || Flag: Vacantable)`: The [color hex](https://htmlcolorcodes.com/color-picker) to set the container border color as. You can also use color integer number.
- `Spoiler?` `(Type: Bool || Flag: Optional)`: Will the container have a spoiler effect?

## Example
```
$nomention
$addContainer[Container1;#673ab7;false]
$addTextDisplay[Hello world!;Container1]
```

```discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !example

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: <none>
  embed:
    description: Hello world!
    color: "#673ab7"
```

```admonish question title="What is this?"
How [`$addTextDisplay[]`](./addTextDisplay.md) works?
```