# $authorURL
Adds a hyperlink to the author text.

## Usage
```
$authorURL[url;(index)]
```
> 🧙‍♂️ `$authorURL` won't work without text in `$author`.

### Breakdown
- `url` - The link to set as the author hyperlink.
- `index` - What embed the author url should belong to (Optional). Default is `1`. [(learn more)](../resources/embedIndexes.md)

## Example
```
$nomention
$author[Click me to visit the BDFD website!]
$authorURL[https://botdesignerdiscord.com]
```
![example](https://user-images.githubusercontent.com/69215413/119854987-8bf4e900-bedf-11eb-8699-cb4afab578f8.png)

*(tap on the text to visit the URL)*
