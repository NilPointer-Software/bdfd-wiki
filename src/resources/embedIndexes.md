# Embed Indexes
If you look around BDFD embed functions (eg. [`$title`](../bdscript/title.md), [`$footer`](../bdscript/footer.md), [`$addTimestamp`](../bdscript/addTimestamp.md) etc.). You'll see an argument called `index`. This argument is used to create multi-embeds.

> 📝 Discord supports creating upto a maximum of 10 embeds per bot message.

## Creating Multi-Embeds
By default, the `index` is set to `1` *(the first embed)*. To create a second embed, you have to write `2` in `index` argument and so on. You can specify any number between `1` to `10` in `index` argument.

> 📝 Total character length of the overall response should not exceed more than 6,000. If it does, the bot won't send the message.

### Example
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
