# $addDisplayText
Adds a text display component to the container body or message.

## Syntax
```
$addDisplayText[Content;(Container name)]
```

```admonish warning title="Limit"
This function counts as a container component. A message can have a maximum of 40 container components.
```

### Parameters
- `Content` `(Type: String || Flag: Required)`:
```admonish info
Supports highlighting.
```

- `Container name` `(Type: String || Flag: Optional)`: 

## Example
```
$nomention
$addTextDisplay[Simple text]
$addContainer[Container1;#673ab7;false]
$addTextDisplay[Hello world!;Container1]
```

```discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Simple text
  embed:
    description: Hello world!
    color: "#673ab7"
```

```admonish question title="What is this?"
How [`$addContainer[]`](./addContainer.md) works?
```