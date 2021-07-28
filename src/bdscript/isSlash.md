# $isSlash
Returns whether the command was ran as a slash command or not.
> 🧙‍♂️ 'true' means the command was ran as a slash command, 'false' means it wasn't.

## Usage
```
$isSlash
```

## Example
```
$nomention
$if[$isSlash==true]
$message[text]
$else
$message
$endif
```

![example](https://user-images.githubusercontent.com/69215413/123517923-b0c0b580-d671-11eb-8e10-ef56a4a5792e.png)
