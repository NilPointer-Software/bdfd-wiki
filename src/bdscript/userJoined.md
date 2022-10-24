# $userJoined
Returns the server joining date of a given user.

## Syntax
```
$userJoined[User ID;(Format)]
```

### Parameters
- `User ID` : The ID of the user whose join date is to return.
- `Format` : Customize the default time format output (Optional).

    > 📌 Click [me](../resources/timeFormat.md) to check all supported time format values.

## Example
- Default format
   ```
   $nomention
   $userJoined[$authorID]
   ```

  ![example](https://user-images.githubusercontent.com/69215413/127031755-17bba8d1-2028-41f6-a305-8074879c681d.png)
- Custom format
   ```
   $nomention
   $userJoined[$authorID;January 2, 2006 at 3:04 PM (MST -07:00)]
   ```

   ![Screenshot_20221024_120922](https://user-images.githubusercontent.com/95774950/197465280-84f4c971-0906-4e16-9f7f-583e042cd37c.png)
