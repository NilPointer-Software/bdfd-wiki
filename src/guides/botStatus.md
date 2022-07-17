# Bot Status
You can set custom rich presence to your bot through in-app.

- Select your bot.
- Go to `Status` tab and click `Add new entry`.
- Choose activity type _(i.e `PLAYING`, `STREAMING`, `LISTENING` etc.)_ in *"Status prefix"* dropdown selection.
- In *"Status"*, type any text which you want to display in bot status. Additionally, you can also use some bdfd functions in bot status.
- *"Status details"* is just a text for you. It won't display anywhere.
- Now, save the changes.

> 📝 If the activity type is `STREAMING`, there will be an additional required field called *"Streaming URL"*. You can only put either YouTube or Twitch URL.

### Available functions
Here, are the available functions you can use in your bot status -

- `$membersCount`

    Returns your bot total members count.
- `$serverCount`

    Returns your bot total server count.
- `$numberSeparator[number;(separator)]`

    Separates numbers in thousands format
