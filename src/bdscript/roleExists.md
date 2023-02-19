# $roleExists
Returns whether or not the provided ID is a actual role.

> 🧙‍♂️ 'true' means the role exists, 'false' means it doesn't.

## Usage
```
$roleExists[roleID]
```

### Parameters
- `roleID` `(Type: Snowflake, String || Flag: Emptiable)`:  The role to check for.

## Examples
**Example #1:**
```
$roleExists[1239039039030939]
$c[This role doesn't exist!]
```

![example1](https://user-images.githubusercontent.com/69215413/126244456-b468fa0c-1134-4f31-b55d-4a331145a94d.png)

**Example #2:**
```
$roleExists[858334189899087943]
$c[This role exists!]
```

![example2](https://user-images.githubusercontent.com/69215413/126244524-5d8ec2cb-2a6b-4ec7-abc4-bbb949f0e384.png)
