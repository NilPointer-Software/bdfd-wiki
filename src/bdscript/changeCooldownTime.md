# $changeCooldownTime
Changes the cooldown metrics. These can be used in cooldown error messages. It can be useful for translations.

## Syntax
```
$changeCooldownTime[Days;Hours;Minutes;Seconds]
```

### Parameters
- `Days` `(Type: String || Flag: Required)`: The text to replace 'Days' with.
- `Hours` `(Type: String || Flag: Required)`: The text to replace 'Hours' with.
- `Minutes` `(Type: String || Flag: Required)`: The text to replace 'Minutes' with.
- `Seconds` `(Type: String || Flag: Required)`: The text to replace 'Seconds' with.

 ### Sub-functions
 
 Name        | Type
------------|---------
`%time-d%`  | Day
`%time-h%`  | Hour
`%time-m%`  | Minute
`%time-s%`  | Second

## Example
```
$nomention
Hello $displayName!
$changeCooldownTime[Days⏰;Hours⏰;Mins🕧;Secs🕧]
$cooldown[10m;Please wait %time-m%!]
```
``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !hello

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Hello Nicky!

- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !hello

- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  verified: true
  content: |
    Please wait 9.9 Mins🕧!
```
