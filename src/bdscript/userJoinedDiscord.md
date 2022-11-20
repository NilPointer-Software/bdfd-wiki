# $userJoinedDiscord
Returns the account creation date of a given user.

> 📌 As of November 2022, this function has been deprecated in favor of [`$creationDate`](./creationDate.md).
>
> 📌 Besides user IDs, [`$userJoinedDiscord`](./userJoinedDiscord.md) can also return creation date of any valid Discord Snowflake ID.

## Syntax
```
$userJoinedDiscord[User ID;(Format)]
```

### Parameters
- `User ID` : The user whose account creation date will be returned. 
- `Format` : Customize the default time format output (Optional).

   > 📌 Click [me](../resources/timeFormat.md) to check all supported time format values.

## Example
- Default format
   ```
   $nomention
   $userJoinedDiscord[$authorID]
   ```

   ![example](https://user-images.githubusercontent.com/69215413/127032089-ef8aa439-89c9-46b2-a2e4-cdf54ab7fa6b.png)
- Custom format
   ```
   $nomention
   $userJoinedDiscord[$authorID;January 2, 2006 at 3:04 PM (MST -07:00)]
   ```

   ![Screenshot_20221023_152611](https://user-images.githubusercontent.com/95774950/197385800-92a434d2-e388-4067-8a78-d9357f6184bd.png)
