# Embed Indexes
If you look around BDFD embed functions (eg. [`$title`](../bdscript/title.md), [`$footer`](../bdscript/footer.md), [`$addTimestamp`](../bdscript/addTimestamp.md) etc.). You'll see an argument called `index`. This argument is used to create multi-embeds.

```admonish warning title="Limit"
Discord supports creating upto a maximum of 10 embeds per bot message.
```

## Creating Multi-Embeds
By default, the `index` is set to `1` *(the first embed)*. To create a second embed, you have to write `2` in `index` argument and so on. You can specify any number between `1` to `10` in `index` argument.

```admonish warning title="Limit"
Total character length of the overall response should not exceed more than 6,000. If it does, the bot won't send the message.
```

```admonish tip title="Remember!"
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
