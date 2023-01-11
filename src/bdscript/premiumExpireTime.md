# $premiumExpireTime
Returns how long until premium expires.
> 🧙‍♂️ Returns 'expired' if the bot is not premium.

## Usage
```
$premiumExpireTime[(unix timestamp)]
```
### Parameters 
- `unix timestamp` `(Type : Bool || Flag : Optional)` : Accepts either "yes" or "no". If "yes" is written, it will return premium expiration value in UNIX timestamp and if "no", it will output as normal time format. Default as "no".

## Example

#### When no premium
```
$nomention
My premium expires in: $premiumExpireTime
```
![example](https://user-images.githubusercontent.com/69215413/123555040-38c9bc80-d751-11eb-963d-92c7b36f9d38.png)

#### When premium
```
$nomention
My premium expires in: $premiumExpireTime (UNIX Timestamp : $premiumExpireTime[yes])
```
![Screenshot_20220721_153646](https://user-images.githubusercontent.com/95774950/180188899-4a28bfcf-5180-4f35-9491-525c9a9c2c32.png)
