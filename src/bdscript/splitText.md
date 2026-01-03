# $splitText
Each separated text has a number, i.e. an index. `$splitText` is a function that returns one of the elements of the separated text by an index or the sign `<` - the very first element, or `>` - the very last element.

## Syntax
```
$splitText[Index]
```

### Parameters
- `Index` `(Type: HowMany || Flag: Required)`: The split value to get (e.g. `2` for the second split). You can also use `>` to return the last split value i.e `$splitText[>]`.

## Example

```
$nomention
$textSplit[hello world !; ]
> $splitText[<]
> $splitText[2]
> $splitText[>]
```

``` discord yaml
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
    <discord-quote>hello
    world
    !</discord-quote>
```