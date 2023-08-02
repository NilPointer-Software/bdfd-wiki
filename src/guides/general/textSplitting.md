# Text Splitting
In this section, you'll learn how to use the text splitting.

## Content
[**Functions Used**](#functions-used) > [**$textSplit[]**](#textsplit) > [**$splitText[]**](#splittext) > [**$getTextSplitLength**](#getextsplitlength) > [**$getTextSplitIndex[]**](#gettextsplitindex) > [**$joinSplitText[]**](#joinsplittext) > [**$removeSplitTextElement[]**](#removesplittextelement) > [**Simple Code**](#simple-code)

## Functions Used
- [`$textSplit[]`](../../bdscript/textSplit.md)
- [`$splitText[]`](../../bdscript/splitText.md)
- [`$getTextSplitLength`](../../bdscript/getTextSplitLength.md)
- [`$getTextSplitIndex[]`](../../bdscript/getTextSplitIndex.md)
- [`$joinSplitText[]`](../../bdscript/joinSplitText.md)
- [`$removeSplitTextElement[]`](../../bdscript/removeSplitTextElement.md)
- [`$editSplitText[]`](../../bdscript/editSplitText.md)

# $textSplit
Splits the provided text by a given separator and saves the value temporarily.
## Syntax
```
$textSplit[Text;Separator]
```
### Parameters
- `Text` `(Type: String || Flag: Emptiable)`: The text to split.
- `Separator` `(Type: String || Flag: Emptiable)`: The separator to split the text with. If this parameter is empty, it separates the text by each character.

## Example
```
$nomention
$textSplit[hello-world-!;-]
> $splitText[2]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <discord-quote>world</discord-quote>
```

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
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <discord-quote>hello
    world
    !</discord-quote>
```

# $getTextSplitLength
Returns the number of splits.

## Syntax
```
$getTextSplitLength
```

## Example
```
$nomention
$textSplit[hello%world%!;%]
> $getTextSplitLength
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <discord-quote>3</discord-quote>
```

# $getTextSplitIndex
Retrieves index from the provided value. Returns `-1` if it couldn't find the value.

## Syntax
```
$getTextSplitIndex[Value]
```

### Parameters
- `Value` `(Type: String || Flag: Emptiable)`: The value to search in the text split.

## Example
```
$nomention
$textSplit[hello_world_!;_]
> $getTextSplitIndex[$message]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example world
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <discord-quote>2</discord-quote>
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example bdfd
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <discord-quote>-1</discord-quote>
```

# $joinSplitText
This function returns the current elements of the separated text with the specified (sometimes new) separator.

## Syntax
```
$joinSplitText[Separator]
```

### Parameters
- `Separator` `(Type: String || Flag: Emptiable)`: The separator to be put between the text split values.

## Example
```
$nomention
$textSplit[hello#world#!;#]
> $joinSplitText[
> ]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <discord-quote>hello
    world
    !</discord-quote>
```

# $removeSplitTextElement
This function removes an element from the separated text by the specified index.

## Syntax
```
$removeSplitTextElement[Index]
```

### Parameters
- `Index` `(Type: Integer || Flag: Required)`: The index of the `$textSplit[]` value to remove.

## Example
```
$nomention
$textSplit[hello-world-!;-]
$removeSplitTextElement[3]
> $joinSplitText[-]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <discord-quote>hello-world</discord-quote>
```

# $editSplitText
This function replaces the element at the specified index with a new element instead of the previous one.

## Syntax
```
$editSplitText[Index;Value]
```

### Parameters
- `Index` `(Type: Integer || Flag: Required)`: The index of the element to edit.
- `Value` `(Type: String || Flag: Required)`: The new value to assign to the provided index.

## Example
```
$nomention
$textSplit[hello-world-!;-]
$editSplitText[2;bdfd]
> $joinSplitText[-]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    <discord-quote>hello-bdfd-!</discord-quote>
```

# Simple Code
```
$nomention
$textSplit[$message;]
Characters: $getTextSplitLength
$textSplit[$message; ]
Words: $getTextSplitLength
Random word: $splitText[$random[1;$sum[$getTextSplitLength;1]]]
First word: $splitText[<]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  color: "#E67E22"
  content: |
    !example Hello world!
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    Characters: 12
    Words: 2
    Random word: world!
    First word: Hello
```
