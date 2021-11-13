# $authorURL
Adds a hyperlink to the author text.

## Usage
```
$authorURL[link;(optional) embedIndex]
```
> 🧙‍♂️ `$authorURL` cannot work without `$author`.

### Breakdown
- `link` - The link to set as the author hyperlink.
- `embedIndex` - What embed the author text should belong to. Default is `1`. [(learn more)](/src/resources/embedIndexes.md)

## Example
```
$nomention
$author[Click me to visit the BDFD website!]
$authorURL[https://botdesignerdiscord.com]
```
![example](https://user-images.githubusercontent.com/69215413/119854987-8bf4e900-bedf-11eb-8699-cb4afab578f8.png)

*(tap on the author text to visit the site)*