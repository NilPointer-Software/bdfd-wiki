# $authorURL
Adds a hyperlink to the author text.

## Syntax
```
$authorURL[url;(index)]
```

### Parameters

| Argument | Description                                 | Type    | Flag     |
|----------|---------------------------------------------|---------|----------|
| url      | The link to set as the author hyperlink.    | URL     | Emptiable |
| index    | To which embed the author URL will be added. | Integer | Optional |


### Note :
> `$authorURL[]` will not work if there is no text provided in `$author[]`.

## Example
```
$nomention
$author[Click me to visit the BDFD website!]
$authorURL[https://botdesignerdiscord.com]
```
![example](https://user-images.githubusercontent.com/113303649/209984969-3f5c56e6-5817-4acf-b2df-37bf237d00df.png)
