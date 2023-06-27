# $hostingExpireTime[]
Returns expire time for the hosting. If "yes" is provided, the function returns the expire time in UNIX Timestamp.

## Syntax
``` 
$hostingExpireTime[Return unix timestamp?]
``` 

### Parameters
- `Return unix timestamp?` `(Type: Bool || Flag: Required)`: Whether to return the expiration time in UNIX Timestamp or not.

## Example
```
$nomention
I will be offline <t:$hostingExpireTime[yes]:R>
```
![example2](https://user-images.githubusercontent.com/98183987/153687914-221aa7f1-5134-47fe-87d9-c7ae75c4a91f.jpg)
