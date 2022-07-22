# $embeddedURL
Sets the title to be a hyperlink.
>📝 Only works if `$title` is also used.

## Usage
```
$embeddedURL[link;(index)]
```

### Breakdown
- `link` - The link to set the title hyperlink to.
- `index` - What embed the title hyperlink should belong to (Optional). Default is `1`. [(learn more)](/src/resources/embedIndexes.md)

## Example
```
$nomention
$title[Bot Designer For Discord]
$embeddedURL[https://botdesignerdiscord.com]
$description[Hello World!]
$color[#683cb4]
```

![example](https://user-images.githubusercontent.com/69215413/125976626-45a94f29-cd9b-445f-a0ae-5dba6f49d2a6.png)
