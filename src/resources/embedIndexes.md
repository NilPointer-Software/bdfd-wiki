# Embed Indexes
If you look around BDFD embed functions (eg. [`$title`](../bdscript/title.md), [`$footer`](../bdscript/footer.md), [`$addTimestamp`](../bdscript/addTimestamp.md) etc.). You'll see an parameter called `Index`. This parameter is used to create multi-embeds.

```admonish warning title="Limit"
Discord supports creating upto a maximum of 10 embeds per bot message.
```

## Creating Multi-Embeds
By default, the `Index` is set to `1` *(the first embed)*. To create a second embed, you have to write `2` in `Index` parameter and so on. You can specify any number between `1` to `10` in `index` parameter.

```admonish warning title="Limit"
Total character length of the overall response should not exceed more than 6,000. If it does, the bot won't send the message.
```

```admonish tip title="Remember!"
By default, the parameter `Index` is set to `1` *(The first embed)*.
✅ `$title[Title]` == `$title[Title;1]`\
❌ `$title[Title]` == `$title[Title;2]`\
❌ `$title[Title]` == `$title[Title;1]` + `$title[Title;2]`
```

### Example
```
$nomention

$color[#673ab7]
$title[Title 1;1]
$description[Hello user!;1]
$footer[I love BDFD]

$color[#673ab7;2]
$title[Embed 2;2]
$description[hello embed!;2]

$color[#673ab7;3]
$title[Embed 3;3]
$description[Посхалка;3]
$addField[First Field;Content;yes;3]
$addField[Second Field;Cat or dog?;yes;3]
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
  embed:
    color: "#673ab7"
    title: Embed 1
    description: Hello user!
    footer:
      text: I love BDFD
  embeds:
  - title: Embed 2
    color: "#673ab7"
    description: Hello embed!
  - title: Embed 3
    color: "#673ab7"
    description: Посхалка
    fields:
      - name: First Field
        value: Content
        inline: true
        inline_index: 1
      - name: Second Field
        value: Cat or dog?
        inline: true
        inline_index: 2
```

### All Embed Functions

- With `Index` parameter:\
1. [`$color[]`](../bdscript/color.md) - Sets the embed border color.\
2. [`$author[]`](../bdscript/author.md) - Adds author text to an embed.\
3. [`$authorIcon[]`](../bdscript/authorIcon.md) - Adds an icon to the author section in the embed.\
4. [`$authorURL[]`](../bdscript/authorURL.md) - Adds a hyperlink to the author text.\
5. [`$title[]`](../bdscript/title.md) - Adds an embedded title to bot’s response message.\
6. [`$embeddedURL[]`](../bdscript/embeddedURL.md) - Sets the title to be a hyperlink.\
7. [`$thumbnail[]`](../bdscript/thumbnail.md) - Adds an embedded thumbnail to the bot’s response message.\
8. [`$description[]`](../bdscript/description.md) - Adds a description to an embed.\
9. [`$addField[]`](../bdscript/addField.md) - Adds a field to an embed.\
10. [`$image[]`](../bdscript/image.md) - Adds an image to the embed.\
11. [`$footer[]`](../bdscript/footer.md) - Sets the embed footer text.\
12. [`$footerIcon[]`](../bdscript/footerIcon.md) - Sets the embed footer icon.\
13. [`$addTimestamp`](../bdscript/addTimestamp.md) - Adds a timestamp to an embed.\
14. [`$addTimestamp[]`](../bdscript/addTimestampComplex.md) - Adds a timestamp to a specific embed.\
- Without `Index` parameter (You can't separate embeds):\
1. [`$sendEmbedMessage[]`](../bdscript/sendEmbedMessage.md) - Sends an embed message to the provided channel.\
2. [`$editMessage[]`](../bdscript/editMessage.md) - Edits one of the bot’s messages.
