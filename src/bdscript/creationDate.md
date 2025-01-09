# $creationDate
Returns the creation date of any valid Discord Snowflake ID.

## Syntax
```
$creationDate[ID;(Format)]
```

> Uses GoLang date format

### Parameters
- `ID` `(Type: Snowflake || Flag: Required)`: The ID from which to get the creation date. The ID can be a `User ID`, a `Role ID`, a `Message ID`, a `Emoji ID`, or a `Guild ID`.
>  [How to get the ID guide.](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)
- `Format` `(Type: String || Flag: Optional)`: Customize the default time format output.
> Click [me](../resources/timeFormat.md) to check all supported time format values.

## Example
- Default format
   ```
   $nomention
   $creationDate[$authorID]
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
  content: |
    2021-01-26
```
\

- Custom format
   ```
   $nomention
   $creationDate[$authorID;January 2, 2006 at 3:04 PM (MST -07:00)]
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
  content: |
    January 26, 2021 at 10:18 AM (UTC +00:00)
```

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```
