# $hostingExpireTime 
Returns expire time for the hosting 

## Usage
``` 
$hostingExpireTime[unix timestamp?]
``` 

### Parameters
- `unix timestamp` `(Type: Bool || Flag: Optional)`: Whether to return the expiration time in Unix Timestamp or not.

## Example #1
``` 
$nomention 
$hostingExpireTime 
``` 

![image](https://user-images.githubusercontent.com/42785890/151823699-8a5fda67-b837-41df-9df4-51219a73e120.png)

## Example #2
```
$nomention
I will be offline <t:$hostingExpireTime[yes]:R>
```
![20220212_081740](https://user-images.githubusercontent.com/98183987/153687914-221aa7f1-5134-47fe-87d9-c7ae75c4a91f.jpg)
