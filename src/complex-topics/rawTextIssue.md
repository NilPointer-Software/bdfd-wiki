# Raw Text Issue
With some functions (namely `$async[]` and `$stop`), you may run into an issue we called "raw text issue". This is when raw text is being outputted, but it is never actually returned. This is not a bug, just how code gets interpreted.

Here's some example of this issue:
```
$if[$username==noituri]
  Hello noit!
  $stop
$endif
```

Even if the user's name is 'noituri', nothing will be returned. Why? With functions like `$stop`, no raw text will ever be outputted, so if you want to return raw text, then you'd use `$sendMessage[]` rather than just putting raw text.

```
$if[$username==noituri]
  $sendMessage[Hello noit!]
  $stop
$endif
```
Now that we added `$sendMessage[]`, this function will work perfectly fine!

#### Embeds
Embed functions should be returned as normal, but if you `$sendMessage[]` with embed functions like `$description[]` and `$title[]` then the message in `$sendMessage[]` will appear in a different message, outside of the embed. To fix this, you could use `$sendEmbedMessage` instead.

#### Async
By default `$async[]` does not return any output, rather it just runs the functions inside of it (asynchronously from the rest of the code), you can get the output of a `$async[]` block by using `$await[]`, which awaits the text result of the code.