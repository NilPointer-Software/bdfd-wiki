# Embed Indexes
Discord now allows 10 embeds per bot message. There is a `embedIndex` field in embed functions, for this purpose.

By default, the `embedIndex` is set to `1` *(the first embed)*. You can provide any number between `1` and `10` in `embedIndex` fields.

## Example
```
$nomention
$title[Title #1]
$description[Description #1]

$title[Title #2;2]
$description[Description #2;2]

$title[Title #3;3]
$description[Description #3;3]
```

![example](https://user-images.githubusercontent.com/69215413/125877770-c2bbc30e-95f4-4859-9343-bce65ad633c5.png)
