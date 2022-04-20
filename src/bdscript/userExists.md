# $userExists
Returns whether the provided user actually exists. 'true' means the user exists, 'false' means they don't.

## Usage
```php
$userExists[userID]
```

| Argument | Description | Type | Flags |
| :---- | :---- | :---- | :---- |
| userID | The ID of the hypothetical user. | [String](/src/resources/arguments/types.md#string) | [Emptiable](/src/resources/arguments/flags.md#emptiable)

## Example
```
$nomention
$allowMention
$userExists[$message]
```
When a invalid user is provided:

![](https://user-images.githubusercontent.com/69215413/162337272-19f0f28e-c0c3-403a-85f2-14db22c9fc66.png)

When a valid user is provided:

![](https://user-images.githubusercontent.com/69215413/162337275-79afd98f-b17e-4464-b057-2f7a942c7ae5.png)
