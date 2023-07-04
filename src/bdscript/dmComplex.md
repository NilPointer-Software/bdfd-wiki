# $dm[]
Direct messages one or multiple users.

## Syntax
```
$dm[User ID;...]
```

### Parameters 
- `User ID` `(Type: Snowflake || Flag: Emptiable)`: The user to whom to send the direct message. Use semicolons `;` as a separator to separate multiple user IDs.

> 🧙‍♂️ You can leave the `User ID` argument empty to direct message the mentioned user. See [Example #1](#example-1) below.

## Examples
### Example #1
*This will direct message the mentioned user.*
```
$nomention
$dm[]
$displayName says hello 👋
```
![example1](https://user-images.githubusercontent.com/111157596/250921279-a0f6cf34-8a24-49aa-a678-d1b015542b0a.png)\
![example1](https://user-images.githubusercontent.com/111157596/250921319-335229ed-6002-424c-8634-d6c33815d792.png)

### Example #2
*This will direct message all the specified users.*
```
$nomention
$dm[871078018041409608;729343563401265193]
$displayName says hello 👋
```

## Note
If the command fails to send the message, make sure the user allows direct messages from everyone.
