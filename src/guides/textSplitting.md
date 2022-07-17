# Text Splitting
Text splitting functions are useful for advanced codes that deal with multiple user arguments, or even adjusting function outputs *(for advanced users)*. This wiki includes information on how to use these functions.

## Functions
### $textSplit[]
```
$textSplit[text;splitter]
```
Splits the text into sections by a splitter.

### $splitText[]
```
$splitText[index]
```
Retrieves a value from `$textSplit`.
> 🧙‍♂️ You can also use `$splitText[>]` to retrieve the last value of the split.

### $getTextSplitLength
```
$getTextSplitLength
```
Returns how many splits there are in `$textSplit`. Here's an example:
```
$textSplit[hello world | hello planet | hello earth;|]
$getTextSplitLength
```
![example](https://user-images.githubusercontent.com/69215413/125673180-c7832e3e-2227-4cd7-a269-84e8053cbd90.png)

### $getTextSplitIndex 
```
$getTextSplitIndex
```
Retrieves the position of the provided value in `$textSplit`. Returns `-1` if it couldn't find the value. Here's an example:
```
$textSplit[Cake-Bread;-]
$getTextSplitIndex[$message]
```
​![​image​](https://user-images.githubusercontent.com/42785890/151845189-1866a9c2-cacb-401b-9efe-137cc54586b6.png)

### $removeSplitTextElement[]
```
$removeSplitTextElement[index]
```
Removes a element from `$splitText`. Here's an example:
```
$textSplit[hello world | hello planet | hello earth;|]
$removeSplitTextElement[1]
1: $splitText[1]
2: $splitText[2]
```

![example](https://user-images.githubusercontent.com/69215413/125673476-a25418c5-56bf-459b-aade-6b298bd064bf.png)

### $joinSplitText
```
$joinSplitText[splitter]
```
Joins `$textSplit` values with provided 'splitter'. Here's a example:
```
$textSplit[hello world | hello planet | hello earth;|]
$joinSplitText[+]
```

![example](https://user-images.githubusercontent.com/69215413/125674054-ed3b0f6b-8627-4020-b5e2-0ae206f131d7.png)

## Examples
### Example #1
```
$textSplit[hello world | hello planet | hello earth;|]
1: $splitText[1]
2: $splitText[2]
3: $splitText[3]
```
![example](https://user-images.githubusercontent.com/69215413/125674553-4b4e80e8-9e4b-410b-9b53-f9766363aee8.png)

### Example #2
```
$textSplit[text1-text2-text3-text4;-]
1: $splitText[1]
2: $splitText[2]
3: $splitText[3]
4: $splitText[4]
Length: $getTextSplitLength
```

![example](https://user-images.githubusercontent.com/69215413/125674632-6e7b41f1-8e0f-40a9-95f8-56e32f90b015.png)
