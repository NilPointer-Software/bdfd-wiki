# $hostingExpireTime[]
Returns your bot's hosting expiration date. If "yes" is provided, the function returns the expiration date in a UNIX timestamp.

## Syntax
``` 
$hostingExpireTime[Return unix timestamp?]
``` 

### Parameters
- `Return unix timestamp?` `(Type: Bool || Flag: Required)`: Whether to return the expiration date in a UNIX timestamp or not.

## Example
```
$nomention
I will be offline <t:$hostingExpireTime[yes]:R>
```
![example2](https://user-images.githubusercontent.com/98183987/153687914-221aa7f1-5134-47fe-87d9-c7ae75c4a91f.jpg)
