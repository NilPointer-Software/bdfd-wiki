# $timeout

Timeouts the mentioned users, or the user provided in 'User ID', for a certain 'Duration' (max 28 days)

## Usage
```
$timeout[duration;(userID)]
```

## Examples
### Usage 1
```
$nomention
$timeout[$message[1]]
```
![](https://user-images.githubusercontent.com/70456337/183470087-6b72ea9f-9365-4686-9483-09bad385e10b.png)
### Usage 2
```
$nomention
$timeout[$message[1];$findUser[$message[2];no]]
```
![](https://user-images.githubusercontent.com/70456337/183470187-305f846a-7515-46b5-af7e-6c2f5713656f.png)
