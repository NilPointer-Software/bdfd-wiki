# $untimeout
Untimeouts a timed out user.

## Syntax
```
$untimeout[(User ID)]
```

### Parameters
- `User ID` : The ID of the user to untimeout. If this parameter is empty, untimeouts the mentioned users (Optional).

### Permissions
Required permission which the bot must have for this function to work properly.
- `moderatemembers`

## Example
- Without ID
   ```
   $nomention
   $untimeout[]
   ```
   ![](https://user-images.githubusercontent.com/70456337/183473087-e2a109af-bc51-465b-bcb1-456c64011770.gif)

- With ID
   ```
   $nomention
   $allowMention
   $untimeout[$findUser[$message[1];no]]
   ```
   ![](https://user-images.githubusercontent.com/70456337/183473060-8a2a74d0-594c-4794-a22d-c5d2a4732365.gif)
