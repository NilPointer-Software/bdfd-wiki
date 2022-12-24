# Text Splitting
Text splitting functions are useful for advanced codes that deal with multiple user arguments, or even adjusting function outputs *(for advanced users)*. This wiki includes information on how to use these functions.

# Functions
There are seven functions in Text Splitting. One of them - $textSplit - is the main function that you start to work with Text Splitting.

## $textSplit
This function separates the text with a separator and saves the text for later use.

### Usage
```
$textSplit[separatedText;separator]
```

#### Breakdown
- `separatedText` - The text separated by a separator.
- `separator` - The separator that separates the text.

### Example
```
$textSplit[hello-world-!;-]
```

## $splitText
Each separated text has a number, i.e. an index. `$splitText` is a function that returns one of the elements of the separated text by an index or the sign `<` - the very first element, or `>` - the very last element.

### Usage
```
$splitText[index]
```

#### Breakdown
- `index` - The index of the element to be returned.

### Examples

#### Example #1
```
$textSplit[hello-world-!;-]

The 1st element: $splitText[1]
The 2nd element: $splitText[2]
The 3rd element: $splitText[3]
```

![$splitText-1](https://user-images.githubusercontent.com/70456337/209445547-a808333c-9c9f-40b9-aad7-bfe1ea12aee3.png)


#### Example #2
```
$textSplit[hello-world-!;-]

The very first element: $splitText[<]
The very last element: $splitText[>]
```

![$splitText-2](https://user-images.githubusercontent.com/70456337/209445550-a0a38b58-6722-4450-a4d6-ca14dbc03973.png)


## $getTextSplitLength
This function has a simple purpose: `$getTextSplitLength` returns the length of the separated text, that is, the number of words separated by a separator. The returned value is the maximum index for the given separated text.

### Usage
```
$getTextSplitLength
```

### Example
```
$textSplit[hello-world-!;-]

The maximum index: $getTextSplitLength
```

![$getTextSplitLength](https://user-images.githubusercontent.com/70456337/209445774-edec9a26-892f-4028-906b-b7ec08f94df5.png)


## $getTextSplitIndex
This function searches for the specified element in the separated text and returns its index. If the specified element wasn't found or doesn't exist, the function will return `-1`.

### Usage
```
$getTextSplitIndex[value]
```

#### Breakdown
- `value` - The text, that is, the element whose index is should be returned.

### Example
```
$textSplit[hello-world-!;-]

$onlyIf[$getTextSplitIndex[$message]!=-1;The specified element wasn't found or doesn't exist!]

The index of the specified element: $getTextSplitIndex[$message]
```

![$getTextSplitIndex](https://user-images.githubusercontent.com/70456337/209445822-b46a7cd7-e724-471d-8c2b-e9da543cb3bc.png)


## $joinSplitText
This function returns the current elements of the separated text with the specified (sometimes new) separator.

### Usage
```
$joinSplitText[separator]
```

#### Breakdown
- `separator` - (The new) separator with which the elements should be returned.

### Example
See example below, using [$removeSplitTextElement](#removesplittextelement) or [$editSplitText](#editsplittext).


## $removeSplitTextElement
This function removes an element from the separated text by the specified index.

### Usage
```
$removeSplitTextElement[index]
```

#### Breakdown
- `index` - The index of the element to be removed.

### Example
```
$textSplit[hello-world-!;-]

$onlyIf[$getTextSplitIndex[$message]!=-1;The specified element wasn't found or doesn't exist!]

$removeSplitTextElement[$getTextSplitIndex[$message]]
Successfully removed element with index $getTextSplitIndex[$message]!
Current elements: $joinSplitText[-]
```

![$removeSplitTextElement](https://user-images.githubusercontent.com/70456337/209445832-e8922a39-c311-4d20-bb19-cddc2db18ecc.png)


## $editSplitText
This function replaces the element with the specified index with a new element instead of the previous one.

### Usage
```
$editSplitText[index;value]
```

#### Breakdown
- `index` - The index of the element to be replaced.
- `value` - The text, that is, what will replace the specified element.

### Example
```
$textSplit[hello-world-!;-]

$onlyIf[$getTextSplitIndex[$message[1]]!=-1;The specified element wasn't found or doesn't exist!]

$editSplitText[$getTextSplitIndex[$message[1]];$message[2]]

The element with index $getTextSplitIndex[$message[1]] has been replaced by $message[2]!
Current elements: $joinSplitText[-]
```

![$editSplitText](https://user-images.githubusercontent.com/70456337/209445845-df23ab33-e4e5-4918-8c48-bcd8fd3b6fc8.png)
