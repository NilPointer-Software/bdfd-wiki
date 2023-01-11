# $repeatMessage
Repeats the provided text a certain amount of times.

## Usage
```
$repeatMessage[Amount;Message]
```

### Parameters
- `Amount` `(Type : Integer || Flag : Required)` : How many times the text is repeated *(max 10 times)*.
- `Message` `(Type : String || Flag : Emptiable)` : The text to repeat.

## Examples

**Example #1:**
```
$nomention
$repeatMessage[5;Hello World]
```

![example1](https://user-images.githubusercontent.com/69215413/126245014-85c3953b-ad54-4658-95df-fb83719dcfa0.png)

**Example #2:**
> 🧙‍♂️ You can use a space at the end of 'text', so there are spaces in-between repeats.

```
$nomention
$repeatMessage[5;Hello World! ]
```

![example2](https://user-images.githubusercontent.com/69215413/126245000-6bac6c11-39d2-40ec-a6d3-0d8123c6a2fd.png)
