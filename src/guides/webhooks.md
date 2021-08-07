# Webhooks
This wiki explains create and operate webhooks in BDFD.

## Creating A Webhook
```
$webhookCreate[channelID;username;avatarURL (can be left empty)]
```
Creates a webhook in the provided 'channelID', with the inputted 'username' and 'avatarURL' assests. This function returns the URL of the newly created webhook.

## Editing A Webhook
```
$webhookAvatarURL[webhookURL;avatarURL]
```
Changes the provided webhook's avatar.

```
$webhookUsername[webhookURL;username]
```
Changes the provided webhook's username.

## Webhook Messages
You can send messages via a webhook using the following functions:

- `$webhookTitle[webhookURL;text]` - Adds a title to the webhook embed.
- `$webhookDescription[webhookURL;text]` - Adds a description to the webhook embed.
- `$webhookFooter[webhookURL;text]` - Adds a footer to the webhook embed.
- `$webhookContent[webhookURL;text]` - The webhook non-embedded message content.
- `$webhookColor[webhookURL;colorHex]` - The color of the webhook embed.

## Example
```
$nomention
$var[webhookURL;$webhookCreate[$channelID;Cool Webhook;]]
$webhookContent[$var[webhookURL];Hello World!]
$c[❗️This example requires BDScript 2 enabled❗️]
```

__Explaination:__

This code is storing the newly created webhook URL returned from `$webhookCreate[]` *(using $var[])*. Then, in the rest of the code `$var[webhookURL]` was called to get the webhook URL, which allowed the webhook message to send using `$webhookContent[]`.
> 🧙‍♂️ Remember, you need to be in BDScript 2 mode to use `$var[]`!

__Output:__

![example](https://user-images.githubusercontent.com/69215413/128615389-30e9dadc-2cce-4868-af33-540f612fcf27.png)
