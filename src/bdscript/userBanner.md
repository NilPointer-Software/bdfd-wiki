# $userBanner
Returns a user banner if user has one.
## Syntax
```
$userBanner[user ID]
```
 > It doesn't return the user's guild banner.
### Parameters
- `user ID` `(Type: Snowflake || Flag: Required)`: The user to get banner for.
## Example
```
$nomention
$sendMessage[$userBanner[$findUser[$message]]?size=4096]
```
![example](https://user-images.githubusercontent.com/113303649/212497271-e2ebad00-2d78-4bdf-a697-c2863df527e2.png)

![example](https://user-images.githubusercontent.com/113303649/212497313-3824e855-d634-4e8a-848e-975d6d768df3.png)
> You can use `?size=size` at the end of the avatar URL to increase/decrease the image size. Example sizes: 1024, 2048, 4096. 
>
>  (e.g. `$image[$userBanner[$findUser[$message]]?size=4096]`)
