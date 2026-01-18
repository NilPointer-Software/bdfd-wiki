# $webhookCreate
Creates and returns the URL of the newly created webhook.

```admonish danger
Webhook URLs should be kept private, don't share them!
```

```admonish warning title="Limit"
Only 10 webhooks can be created per channel.
```

## Syntax
```
$webhookCreate[Channel ID;Username;(Avatar URL)]
```

### Parameters
- `Channel ID` `(Type: Snowflake || Flag: Required)`: The channel in which the webhook will be created.
- `Username` `(Type: String || Flag: Required)`: Name of the webhook that will be displayed in the channel.
- `Avatar URL` `(Type: String || Flag: Vacantable)`: Avatar of the webhook that will be displayed in the channel.

## Example
```
$nomention
$webhookCreate[$channelID;BDFD Webhook 🤖]
```

```discord yaml
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
  content: |
    1234abcd567ABCDEFG890H_654679203GDGJEMFNXH.6479304948
```

```admonish question title="What is this?"
How [`$channelID`](../../bdscript/channelID.md) works?
```

~~~admonish tip
You can use [`$var[]`](../../bdscript/var.md) or [other variable functions](../introduction/variables.md) to store the Webhook URL.

```$nomention
$var[Webhook;$webhookCreate[$channelID;Secret]]
Created and saved!
```

```discord yaml
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
  content: |
    Created ans saved!
```

> How [`$var[]`](../../bdscript/var.md) and [`$channelID`](../../bdscript/channelID.md) works?

~~~
