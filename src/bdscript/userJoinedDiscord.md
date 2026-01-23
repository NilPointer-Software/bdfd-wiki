# $userJoinedDiscord
<div class="functionTags">
  <span id="DeprecatedTag">Deprecated</span>
</div>

```admonish warning
As of November 2022, this function has been deprecated in favor of [`$creationDate[]`](./creationDate.md).
```

Returns the account creation date of a given user.

## Syntax
```
$userJoinedDiscord[ID;(Format)]
```

```admonish info
Uses GoLang date format.
```

```admonish tip
Besides user IDs, `$userJoinedDiscord[]` can also return the creation date of any valid Discord Snowflake ID.
```

### Parameters
- `ID` `(Type: Snowflake || Flag: Required)`: The user/channel/role/guild/message id whose creation date will be returned. 
- `Format` `(Type: String || Flag: Optional)`: Customize the default [time format](../resources/timeFormat.md) output.

## Example
```
$nomention
$userJoinedDiscord[$authorID]
```
   
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    2021-01-26
```

~~~admonish example

Example with custom format:

```
$nomention
$userJoinedDiscord[$authorID;January 2, 2006 at 3:04 PM (MST -07:00)]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  user_id: 1009018156494368798
  color: "#378afa"
  bot: true
  verified: true
  content: |
    January 26, 2021 at 10:18 AM (UTC +00:00)
```

~~~

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```
