# $url
Encodes or decodes the provided text in the URL encoding format.

URL encoding is a method of converting of reserved, unsafe, and non-ASCII characters in URLs to a format that is universally accepted and understood by all web browsers and servers while URL decoding is the vice-versa of URL encoding.

## Syntax
```
$url[Mode;Text]
```

### Parameters
- `Mode` : Whether to encode or decode the provided text. Accepts either `encode` or `decode` as input.
- `Text` : The text to change.

## Example
- Encoding
   ```
   $nomention
   https://example.url/encode?convert=$url[encode;Hello world!!]
   ```
   ![Screenshot_20221024_170233](https://user-images.githubusercontent.com/95774950/197517522-e7429268-dfcf-4289-bb48-1554e2d4ecfa.png)

- Decoding
   ```
   $nomention
   $url[decode;https://example.url/decode?convert=Hello+world%21%21]
   ```
   ![Screenshot_20221024_170437](https://user-images.githubusercontent.com/95774950/197517477-758829ff-19f6-4134-885d-8a513104f099.png)
