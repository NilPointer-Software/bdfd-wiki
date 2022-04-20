# $url
Encodes or Decodes a link.

URL encoding translates special characters from the URL to a representation that can be parsed validly for the web. An example of encoding is you can't use spaces in a URL else it the text after the space is not considered part of the URL, but with an encoding that space would become `+` which represents a space, but in a form that applies to the web.\
Similarly, URL decodes convert an encoded URL back to its normal state. For example, `+` would become a regular space.\
You can see the different character codes [here](https://www.w3schools.com/tags/ref_urlencode.ASP#:~:text=ASCII%20Encoding%20Reference). Note that *Bot Design for Discord* uses UTF-8 encoding, but spaces are replaced with `+` instead of `%20`.

## Usage
```php
$url[type;text]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| type | Whether to encode or decode the text. | [Enum](/src/resources/arguments/types.md#enum) | [Required](/src/resources/arguments/flags.md#required)
| text | The text to encode/decode. | [String](/src/resources/arguments/types.md#string) | [Required](/src/resources/arguments/flags.md#required)

## Examples
### Example #1
```
$nomention
$url[encode;hello world!] $c[returns "hello+world%21"]
```

### Example #2
```
$nomention
$url[decode;hello+world%21] $c[returns "hello world"]
```