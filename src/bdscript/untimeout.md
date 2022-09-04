# $untimeout

Removes timeout from mentioned users, or the provided user.

> **Note:** To timeout users see [`$timeout[]`](./timeout.md)

## Usage
```
$untimeout[(user ID)]
```

## Examples
### Example 1
```
$nomention
$untimeout[]
```
![](https://user-images.githubusercontent.com/70456337/183473087-e2a109af-bc51-465b-bcb1-456c64011770.gif)

### Example 2
```
$nomention
$untimeout[$findUser[$message[1];no]]
```
![](https://user-images.githubusercontent.com/70456337/183473060-8a2a74d0-594c-4794-a22d-c5d2a4732365.gif)
