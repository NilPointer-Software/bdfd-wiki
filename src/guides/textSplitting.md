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
Returns how many splits there are in `$textSplit`. Here's a example:
```
$textSplit[hello world | hello planet | hello earth;|]
$getTextSplitLength
```

![example](https://user-images.githubusercontent.com/69215413/125673180-c7832e3e-2227-4cd7-a269-84e8053cbd90.png)

### $removeSplitTextElement[]
```
$removeSplitTextElement[index]
```
Removes a element from `$splitText`. Here's a example:
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

## Advanced
### Splitting via Spaces
In `$textSplit`, BDFD reads spaces differently. Here's a example:
```
$textSplit[this is some text; ]
```
Instead of splitting the text by each space, it splits the text by each character.

To prevent this from happening, you can use the code below:
```
$textSplit[$replaceText[text; ;,;-1];,]
$c[Replace 'text' with your text.]
```

Example using this method:
```
$textSplit[$replaceText[hello hey hi; ;,;-1]]
1: $splitText[1]
2: $splitText[2]
3: $splitText[3]
```

![example](https://user-images.githubusercontent.com/69215413/125679466-df4a5055-fe09-489b-9854-7243dea46e93.png)
