# $userPerms
Displays which permissions the provided user has.

## Usage
```
$userPerms[userID;amountToReturn;separator]
```

### Breakdown
- `userID` - The user to fetch the permissions for.
- `amountToReturn` - The amount of permissions to return. Can be set to `-1` if you'd like to return every permission.
- `separator` - The separator between each permission.

## Examples
### Example #1
```
$nomention
**$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]'s Permissions**
$userPerms[$mentioned[1;yes];-1;, ]
```
![](https://user-images.githubusercontent.com/69215413/136458822-b58a6848-4c27-4711-abcf-3618e840880c.png)

### Example #2
```
$nomention
**$username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]'s Permissions**
$toLowercase[$replaceText[$userPerms[$mentioned[1;yes];-1;, ];_; ;-1]]
```
![](https://user-images.githubusercontent.com/69215413/136459010-5702695e-90d2-4de1-bfc0-4b1b6c95e6f9.png)
