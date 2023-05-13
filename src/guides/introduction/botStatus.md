# Bot Status
Here, you will learn how to set-up a custom bot status & activity.

## Status
To set a custom status,
- Select your bot.
- Go to the *"Status"* tab and press gear icon `⚙️` at top-right corner.
- Toggle on *"Enable bot presence"*.
- In *"Bot status"*, choose your preferred bot presence _(i.e `Online`, `Idle`, `Invisible` etc.)_
- In *"Interval amount"*, set a custom interval duration. This changes how many seconds your bot will wait before refreshing its status _(Minimum interval duration is 12 seconds while maximum is 600 seconds)_.

    > 📝 If you have multiple bot status entries, it will switch to next status instead of refreshing current status.

## Activity
> ⚠️ You need to toggle on `Enable bot presence` in *"Bot status settings"* in order to show activity.

To set custom rich presence,
- Select your bot.
- Go to the *"Status"* tab and press `Add new entry`.
- Choose activity type _(i.e `PLAYING`, `STREAMING`, `LISTENING` etc.)_ in the *"Status prefix"* dropdown selection.
- In *"Status"*, type any text that you would like to display as your bot's status. Additionally, you can also use some [BDFD functions](#available-functions) in your bot's status.
- *"Status details"* is just a text for you to see. It won't display anywhere.
- Save the changes.

> 📝 If the activity type is `STREAMING`, there will be an additional required field called *"Streaming URL"*. You can only put either YouTube or Twitch URL.

### Available functions
Here are the available functions that you can use in your bot's status:

- `$membersCount`

    Returns your bot total members count.
- `$serverCount`

    Returns your bot total server count.
- `$numberSeparator[number;(separator)]`

    Separates numbers in thousands format.

#### Example

![](https://user-images.githubusercontent.com/95774950/179421363-05c2a0e0-a686-4ee8-9745-e5df4fcb11f6.png)

![Screenshot_20220718_003851](https://user-images.githubusercontent.com/95774950/179421369-64e5fce9-9758-432f-ace6-600e322c2ccb.png)
