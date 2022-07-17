# Bot Status
Here, you will learn how to setup custom bot status & activity.

## Status
To setup custom status,
- Select your bot.
- Go to `Status` tab and click gear icon `⚙️` at top-right corner.
- Toggle on *"Enable bot presence"*.
- In *"Bot status"*, choose your preferred bot presence _(i.e `Online`, `Idle`, `Invisible` etc.)_
- In *"Interval amount"*, set a custom interval duration. It is the _x_ seconds your bot status will be refreshed _(Minimum interval duration is 12 seconds while maximum is 600 seconds)_.

    > 📝 If you have multiple bot status activities, it will switch to next status instead of refreshing current status.

## Activity
> ⚠️ You need to toggle on `Enable bot presence` in *"Bot status settings"* in order to show activity.

To set custom rich presence,
- Select your bot.
- Go to `Status` tab and click `Add new entry`.
- Choose activity type _(i.e `PLAYING`, `STREAMING`, `LISTENING` etc.)_ in *"Status prefix"* dropdown selection.
- In *"Status"*, type any text which you want to display in bot status. Additionally, you can also use some bdfd [functions](#available-functions) in bot status.
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

    Separates numbers in thousands format.

#### Example
