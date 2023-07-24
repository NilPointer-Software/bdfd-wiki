# $userBadges
Returns a list of user badges separated by a space or the given separator.

## Syntax
```
$userBadges[User ID;(Separator)]
```

### Parameters
- `User ID` `(Type: Snowflake || Flag: Required)`: The user to get the badges from.
- `Separator` `(Type: String || Flag: Optional)`: Will be used to separate each badge.

| Returns                | Name
| ---------------------- | ----------------------
| staff                  | Discord Employee
| partner                | Partnered Server Owner
| hype_squad             | HypeSquad Events Member
| bug_hunter_level_1     | Bug Hunter Level 1
| hype_squad_bravery     | House Bravery Member
| hype_squad_brilliance  | House Brilliance Member
| hype_squad_balance     | House Balance Member
| premium_early_supporter| Early Nitro Supporter
| team_pseudo_user       | User is a team
| bug_hunter_level_2     | Bug Hunter Level 2
| verified_bot           | Verified Bot
| verified_developer     | Early Verified Bot Developer
| certified_moderator    | Moderator Programs Alumni
| bot_http_interactions  | Bot uses only HTTP interactions and is shown in the online member list
| active_developer       | User is an Active Developer



## Example
```
$nomention
`$userBadges[$authorID;` `]`
```
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    !example main-chat

- username: BDFD Support
  color: "#b9a0e0"
  bot: true
  content: |
    `hype_squad_balance` `partner`
```

