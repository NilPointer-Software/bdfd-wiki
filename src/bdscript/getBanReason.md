# $getBanReason[]
Gets the user's ban reason.


## Usage
```
$getBanReason[User ID;(Guild ID)]
```

### Parameters
- `User ID`: User to get the ban reason for
- `Guild ID`: The server id from which to get the ban reason. Optional


#### Example
```
$nomention
Ban reason: $getBanReason[$findUser[$message;no]]
```

![example](https://user-images.githubusercontent.com/113303649/209573943-c4124c26-50a3-455e-a785-d295dac96331.png)
