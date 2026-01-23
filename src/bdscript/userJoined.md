# $userJoined
Returns the server joining date of a given user.

## Syntax
```
$userJoined[User ID;(Format)]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user whose join date will be returned.
- `Format` `(Type: String || Flag: Optional)`: Customize the default time format output.

   > Click [me](../resources/timeFormat.md) to check all supported time format values.

## Example
```
$nomention
$userJoined[$authorID]
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
    2022-08-16
```

~~~admonish example

Example with custom format:

```
$nomention
$userJoined[$authorID;January 2, 2006 at 3:04 PM (MST -07:00)]
```

```discord yaml
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
    August 16, 2022 at 8:39 AM (UTC +00:00)
```

~~~

```admonish question title="What is this?"
How [`$authorID`](./authorID.md) works?
```
