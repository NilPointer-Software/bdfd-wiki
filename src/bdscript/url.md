# $url
Encodes or decodes the provided text in the URL encoding format.

```admonish info
URL encoding is a method of converting reserved, unsafe, or non-ASCII characters to a URL format that is universally accepted and understood by all web browsers and servers while URL decoding is the vice-versa of URL encoding.
```

## Syntax
```
$url[Mode;Text]
```

### Parameters
- `Mode` `(Type: Enum || Flag: Required)`: Whether to encode or decode the provided text. Accepts either `encode` or `decode` as input.
- `Text` `(Type: String || Flag: Emptiable)`: The text to change.

## Example
- Encoding
   ```
   $nomention
   https://example.url/encode?convert=$url[encode;Hello world!!]
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
  content: <a href="https://example.url/encode?convert=Hello+world%21%21">https://example.url/encode?convert=Hello+world%21%21</a>
```

- Decoding
   ```
   $nomention
   $url[decode;https://example.url/decode?convert=Hello+world%21%21]
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
  content: <a href="https://example.url/encode?convert=Hello world!!">https://example.url/encode?convert=Hello</a> world!!
```
