# $userBannerColor
Returns the color of the given user banner. Returns an empty string if no banner color is set.

## Syntax
```
$userBannerColor[User ID]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to get the banner color from.

## Example
```
$nomention
#$userBannerColor[$authorID]
```

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example
- username: BDFD Support
  color: "#b9a0e0"
  bot: true
  content: |
    #32D167
```

![example](https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/3f1ad81d-2ffb-485d-b5e5-48b2a0ac0728)

