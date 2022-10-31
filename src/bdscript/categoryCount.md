# $categoryCount
Returns the category count of a guild.

## Usages
There are two usages of this function :

### Usage #1
#### Syntax
```
$categoryCount
```
Returns the category count of the current guild.

#### Example
```
$nomention
There are $categoryCount categories in this server!
```
![example](https://user-images.githubusercontent.com/94063167/198900353-1c47a4e9-19e5-4980-982c-e0cd955beb1e.png)

### Usage #2
#### Syntax
```
$categoryCount[Guild ID]
```
Returns the category count of a provided guild.

#### Parameters
- `Guild ID`: The guild to get its category count.

#### Example
```
$nomention
There are $categoryCount[$message[1]] categories in the server!
```
![example2](https://user-images.githubusercontent.com/94063167/198900619-c3a3b71e-2d6e-4d6c-b1e0-d4b4449d6198.png)
