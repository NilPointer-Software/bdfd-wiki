# JSON Functions
Before starting reading this guide, first of all you already should know what JSON is and where and how it's being used.\
Please learn what's JSON on [W3Schools](https://www.w3schools.com/whatis/whatis_json.asp).

> This guide will contain the usage of the [Character Escaping](./characterEscaping.md) and the [`$optOff`](../bdscript/optOff.md) function in some cases.

## $jsonParse
`$jsonParse` is the main function to start working with other JSON functions.\
This function parses a JSON string into an object with which you can work further.

### Syntax
```
$jsonParse[JSON string]
```

### Parameters
- `JSON string` `(Type: String || Flag: Required)` - The JSON string which should be parsed.

### Examples
See examples in the further of the current guide.

## $json
`$json` is the function which retrievers JSON values from a specified key after the JSON string being parsed.

### Syntax
```
$json[Key;...]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)` - The JSON key which should be retrieved.

### Examples

> The `$json` function will return an empty string if the value is a null, or the key doesn't exist, or no [`$jsonParse`](#jsonparse) function was executed, or [`$jsonClear`](#jsonclear) was executed.

#### Without Arrays
```
$jsonParse[{
    "username": "NightNutSky",
    "tag": "6700",
    "identity": {
        "age": 16
    }
}]

Username: $json[username]
Tag: $json[tag]
Name: $json[identity;age] years old
```

![](https://user-images.githubusercontent.com/70456337/213921222-ee1f7205-a85b-4f64-8fea-341d25f49bf3.png)

#### With Arrays
```
$jsonParse[{
    "computer": [{
        "apps": {
            "software": ["BlueStacks", "Krita", "Visual Studio Code"\],
            "games": ["GTA 5", "RDR 2", "CS:GO", "Cyberpunk 2077"\]
        }
    },{
        "cpu": "Intel",
        "gpu": "NVIDIA",
        "ram": "XPG"
    }\]
}]

Software: $json[computer;0;apps;software]
Games: $json[computer;0;apps;games]
Brands: CPU - $json[computer;1;cpu], GPU - $json[computer;1;gpu], RAM - $json[computer;1;ram]
```

![](https://user-images.githubusercontent.com/70456337/213921257-2f5cdcb5-8abb-45fb-8342-9512804bcb75.png)

## $jsonSet
`$jsonSet` sets or replaces the value at the specified JSON key.

### Syntax
```
$jsonSet[Key;...;Value]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)` - The JSON key where the value should be set or replaced.
- `Value` `(Type: Integer, Bool, Float, String || Flag: Required)` - The value which should be set or replaced.

### Example
```
$jsonParse[{
    "username": "NightNutSky",
    "tag": "6700",
    "identity": {
        "age": 16
    }
}]

Username: $json[username]
Tag: $json[tag]
Age: $json[identity;age] years old

$jsonSet[username;Priyanuj]
$jsonSet[tag;2626]
$jsonSet[identity;age;19]

$optOff[Username: $json[username]
Tag: $json[tag]
Age: $json[identity;age] years old]
```

![](https://user-images.githubusercontent.com/70456337/214134724-9ea1a4fb-177e-473f-a5ca-a326829a135d.png)

## $jsonUnset
The opposite of the [`$jsonSet`](#jsonset) function.

### Syntax
```
$jsonUnset[Key;...]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)` - The JSON key which should be unset.

### Example
```
$jsonParse[{
    "username": "NightNutSky",
    "tag": "6700",
    "identity": {
        "age": 16
    }
}]

Username: $json[username]
Tag: $json[tag]
Age: $json[identity;age] years old

$jsonUnset[username]
$jsonUnset[tag]
$jsonUnset[identity;age]

$optOff[Username: $json[username]
Tag: $json[tag]
Age: $json[identity;age] years old]
```

![](https://user-images.githubusercontent.com/70456337/213921355-924d2647-86ff-4fc8-ac76-8edff1f82b51.png)

## $jsonExists
`$jsonExists` checks if the specified JSON key exists in the parsed JSON.

> Returns an empty string if no [`$jsonParse`](#jsonparse) function was executed, or [`$jsonClear`](#jsonclear) was executed.

### Syntax
```
$jsonExists[Key;...]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)` - The JSON key which should be checked.

### Examples
See examples in the further of the current guide.

## $jsonArrayCount
`$jsonArrayCount` counts the elements in the specified JSON key.

### Syntax
```
$jsonArrayCount[Key;...]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)` - The JSON key where the elememts should be counted.

### Example
```
$jsonParse[{
    "computer": [{
        "apps": {
            "software": ["BlueStacks", "Krita", "Visual Studio Code"\],
            "games": ["GTA 5", "RDR 2", "CS:GO", "Cyberpunk 2077"\]
        }
    },{
        "cpu": "Intel",
        "gpu": "NVIDIA",
        "ram": "XPG"
    }\]
}]

$onlyIf[$jsonExists[computer;0;apps;$message]==true;The specified category doesn't exist! Available categories are `software` and `games`]
The count of the `$message` apps is $jsonArrayCount[computer;0;apps;$message]. 
```

![](https://user-images.githubusercontent.com/70456337/213921410-502456f6-b2dc-4423-849f-40f7adecdc40.png)

## $jsonArrayAppend
`$jsonArrayAppend` appends the value at the end of the specified JSON key.

### Syntax
```
$jsonArrayAppend[Key;...;Value]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)` - The JSON key where the value should be appended.
- `Value` `(Type: Integer, Bool, Float, String || Flag: Required)` - The value which should be appended.

### Example
```
$jsonParse[{
    "computer": [{
        "apps": {
            "software": ["BlueStacks", "Krita", "Visual Studio Code"\],
            "games": ["GTA 5", "RDR 2", "CS:GO", "Cyberpunk 2077"\]
        }
    },{
        "cpu": "Intel",
        "gpu": "NVIDIA",
        "ram": "XPG"
    }\]
}]

$onlyIf[$jsonExists[computer;0;apps;$message[1]]==true;The specified category doesn't exist! Available categories are `software` and `games`]

$var[value;$replaceText[$message;$message[1] ;]]

$jsonArrayAppend[computer;0;apps;$message[1];$var[value]]

The new app was added to the `$message[1]` category!
Current apps in the `$message[1]` category: $json[computer;0;apps;$message[1]]
```

![](https://user-images.githubusercontent.com/70456337/213921444-209dd14c-d1f2-4d8d-960d-5bc52fd18cb1.png)

## $jsonStringify
`$jsonStringify` turns parsed JSON into a string value.

> The `$jsonStringify` function will return an empty string if no [`$jsonParse`](#jsonparse) function was executed, or [`$jsonClear`](#jsonclear) was executed.

### Syntax
```
$jsonStringify
```

### Example
```
$jsonParse[{
    "computer": [{
        "apps": {
            "software": ["BlueStacks", "Krita", "Visual Studio Code"\],
            "games": ["GTA 5", "RDR 2", "CS:GO", "Cyberpunk 2077"\]
        }
    },{
        "cpu": "Intel",
        "gpu": "NVIDIA",
        "ram": "XPG"
    }\]
}]

$jsonStringify
```

![](https://user-images.githubusercontent.com/70456337/214134823-84ec207e-ab31-4ec1-8d80-ecab50701d96.png)

## $jsonPretty
`$jsonPretty` turns parsed JSON into a pretty string value and then returns it.

> The `$jsonPretty` function will return an empty string if no [`$jsonParse`](#jsonparse) function was executed, or [`$jsonClear`](#jsonclear) was executed.

### Syntax
```
$jsonPretty[Indent length]
```

#### Parameters
- `Indent length` `(Type: Integer || Flag: Required)` - The length of the indentation. Usually it's `2` or `4`.

### Example
```
$disableInnerSpaceRemoval
$jsonParse[{"computer":[{"apps":{"software":["BlueStacks","Krita","Visual Studio Code"\],"games":["GTA 5","RDR 2","CS:GO","Cyberpunk 2077"\]}},{"cpu":"Intel","gpu":"NVIDIA","ram":"XPG"}\]
}]

$jsonPretty[4]
```

> To make an output really pretty, we have to use [`$disableInnerSpaceRemoval`](../bdscript/disableInnerSpaceRemoval.md) firstly.

![](https://user-images.githubusercontent.com/70456337/214135087-1ea9ed9c-40ab-4c29-b5c6-d0da83478487.png)

## $jsonArray
`$jsonArray` marks a specified JSON key as an array.

### Syntax
```
$jsonArray[Key;...]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)` - The JSON key which should be marked as an array.

### Example
```
$jsonParse[{
    "games": ""
}]

Non-array `games` key:
$jsonPretty[4]

$jsonArray[games]

Array `games` key:
$optOff[$jsonPretty[4]]
```

![Discord_wN5u0d6III](https://user-images.githubusercontent.com/70456337/214134895-216af646-c494-4328-a43d-a93e6c13859d.png)

## $jsonClear
`$jsonClear` clears current parsed JSON.

### Syntax
```
$jsonClear
```