# $userPerms

Returns user permissions. Amount to return can be set to -1 if you'd like to return every permission

## Usage
```
$userPerms[user ID;return amount;separator]
```

## Breakdown
- `user id` - the userID to get their permissions.
- `return amount` - how many permissions you want to get, use -1 to extract all.
- `separator` - text/character to use to separate each permission

## Example
```
$nomention
$userPerms[$mentioned[1];-1;-]
```
![image](https://user-images.githubusercontent.com/42785890/151909707-d8e093f2-1279-4754-88a5-51466270fde6.png)
