# JSON Functions
Before you read this guide, you should be familiar with what JSON is and where and how it's being used.\
You can familiarize yourself with JSON by reading a tutorial on [W3Schools](https://www.w3schools.com/js/js_json_intro.asp).

> This guide will utilize [Character Escaping](./characterEscaping.md) and the [`$optOff`](../bdscript/optOff.md) function.

## $jsonParse
`$jsonParse` is the primary function used when working with JSON data.\
This function parses a JSON string into an object which can then be used by other JSON functions.

### Syntax
```
$jsonParse[JSON string]
```

### Parameters
- `JSON string` `(Type: String || Flag: Required)`: The JSON string to parse into an object.

### Examples
See examples further down the guide.

## $json
`$json` function retrieves JSON values from a specified key in the current JSON object.

> The `$json` function will return an empty string if the value is null, the key doesn't exist, no [`$jsonParse`](#jsonparse) or [`$jsonSet`](#jsonset) function was executed, or [`$jsonClear`](#jsonclear) was executed.

### Syntax
```
$json[Key;...]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)`: The JSON key which will be retrieved.

### Examples

#### Without Arrays
```
$nomention
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
```

![](https://user-images.githubusercontent.com/70456337/217574893-2f962a57-f56c-49cd-8009-4dbeecbf7822.png)

#### With Arrays
```
$nomention
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
- `Key` `(Type: String || Flag: Required)`: The JSON key where the value will be set or replaced.
- `Value` `(Type: Integer, Bool, Float, String || Flag: Required)`: The value to set or replace with.

### Example
```
$nomention
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
`$jsonUnset` removes the value at the specified JSON key.\
In short, the opposite of the [`$jsonSet`](#jsonset) function.

### Syntax
```
$jsonUnset[Key;...]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)`: The JSON key which will be unset.

### Example
```
$nomention
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
`$jsonExists` checks if the specified JSON key exists in the current JSON object.

> Returns an empty result if no [`$jsonParse`](#jsonparse) or [`$jsonSet`](#jsonset) function was executed, or [`$jsonClear`](#jsonclear) was executed.

### Syntax
```
$jsonExists[Key;...]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)`: The JSON key which will be checked.

### Examples
See examples further down the guide.

## $jsonArrayCount
`$jsonArrayCount` counts the elements in the specified JSON key.

### Syntax
```
$jsonArrayCount[Key;...]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)`: The JSON key where the elements will be counted.

### Example
```
$nomention
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
- `Key` `(Type: String || Flag: Required)`: The JSON key where the value will be appended.
- `Value` `(Type: Integer, Bool, Float, String || Flag: Required)` : The value to append.

### Example
```
$nomention
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

A new app was added to the `$message[1]` category!
Current apps in the `$message[1]` category: $json[computer;0;apps;$message[1]]
```

![](https://user-images.githubusercontent.com/70456337/219880948-4e641b49-6f74-4b7d-939c-c1b30a96807c.png)

## $jsonStringify
`$jsonStringify` turns the current JSON object into a string value.

> The `$jsonStringify` function will return an empty string if no [`$jsonParse`](#jsonparse) or [`$jsonSet`](#jsonset) function was executed, or [`$jsonClear`](#jsonclear) was executed.

### Syntax
```
$jsonStringify
```

### Example
```
$nomention
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
`$jsonPretty` turns the current JSON object into a pretty string value.

> The `$jsonPretty` function will return an empty result if no [`$jsonParse`](#jsonparse) or [`$jsonSet`](#jsonset) function was executed, or [`$jsonClear`](#jsonclear) was executed.

### Syntax
```
$jsonPretty[Indent length]
```

#### Parameters
- `Indent length` `(Type: Integer || Flag: Required)`: The length of the indentation. Usually it's `2` or `4`.

### Example
```
$nomention
$disableInnerSpaceRemoval
$jsonParse[{"computer":[{"apps":{"software":["BlueStacks","Krita","Visual Studio Code"\],"games":["GTA 5","RDR 2","CS:GO","Cyberpunk 2077"\]}},{"cpu":"Intel","gpu":"NVIDIA","ram":"XPG"}\]
}]

$jsonPretty[4]
```

> For the output to really be pretty, we have to use the [`$disableInnerSpaceRemoval`](../bdscript/disableInnerSpaceRemoval.md) function.

![](https://user-images.githubusercontent.com/70456337/214135087-1ea9ed9c-40ab-4c29-b5c6-d0da83478487.png)

## $jsonArray
`$jsonArray` marks a specified JSON key as an array.

### Syntax
```
$jsonArray[Key;...]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)`: The JSON key which will be marked as an array.

### Example
```
$nomention
$jsonParse[{
    "games": ""
}]

Non-array `games` key:
$jsonPretty[4]

$jsonArray[games]

Array `games` key:
$optOff[$jsonPretty[4]]
```

![](https://user-images.githubusercontent.com/70456337/214134895-216af646-c494-4328-a43d-a93e6c13859d.png)

## $jsonClear
`$jsonClear` clears out the current JSON object.

### Syntax
```
$jsonClear
```

### Example
```
$nomention
$jsonParse[{
    "username": "NightNutSky",
    "tag": "6700",
    "identity": {
        "age": 16
    }
}]

Username: $json[username]
$jsonClear
Username: $optOff[$json[username]]
```

![](https://user-images.githubusercontent.com/70456337/214381794-e94ba5e7-b90e-4c0e-971b-ca6b350928ee.png)

## $jsonArrayIndex
`$jsonArrayIndex` gets the array index of a given value.

> The `$jsonArrayIndex` function will return `-1` if value not found and will return an empty result if no [`$jsonParse`](#jsonparse) or [`$jsonSet`](#jsonset) function was executed, or [`$jsonClear`](#jsonclear) was executed.

### Syntax
```
$jsonArrayIndex[Key;...;Value]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)`: The JSON key where the value will be searched for.
- `Value` `(Type: String, Integer, Float || Flag: Required)`: The value to search for.

### Example
```
$nomention
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

The $message's index in `apps/software` is $jsonArrayIndex[computer;0;apps;software;$message].
```

![](https://user-images.githubusercontent.com/70456337/216845225-6830bc2b-616c-4fc6-932e-ed38be86cd4b.png)

## $jsonSetString
`$jsonSetString` function sets or replaces the value at the specified JSON key. Always sets the value as a string.

### Syntax
```
$jsonSetString[Key;...;Value]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)`: The JSON key where the value will be set or replaced.
- `Value` `(Type: String || Flag: Required)`: The value to set or replace with.

> This function is recommended to be used mostly in economic-related commands. Why? The next example will explain it.

### Example

- `$jsonSet`
    ```
    $nomention
    $jsonParse[{}]

    $jsonSet[balance;$message]

    Balance key was set to: $json[balance]
    ```
    ![](https://user-images.githubusercontent.com/70456337/216845249-1ff900bd-ff1f-466d-bd60-b616aa90e334.png)
- `$jsonSetString`
    ```
    $nomention
    $jsonParse[{}]

    $jsonSet[balance;$message]

    Balance key was set to: $json[balance]
    ```
    ![](https://user-images.githubusercontent.com/70456337/216845276-62748993-567a-4022-bf59-69a77a37bc32.png)

If we set this value as a number manually, we'll encounter issues.
```
$nomention
$jsonParse[{
    "balance": 788895455566645444567
}]

Balance key: $json[balance]
```

![](https://user-images.githubusercontent.com/70456337/216845297-44217351-0485-4249-a19d-edabbe9b71fb.png)

```
$nomention
$jsonParse[{
    "balance": "788895455566645444567"
}]

Balance key: $json[balance]
```

![](https://user-images.githubusercontent.com/70456337/216845304-07a48e0c-65e7-4229-90a8-f705201dfdd5.png)

> Therefore, we should set big numbers as strings.

## $jsonJoinArray
`$jsonJoinArray` function joins a JSON array under the specified key with the given separator.

> The `$jsonJoinArray` function will return an empty string if the value is null, the key doesn't exist, no [`$jsonParse`](#jsonparse) or [`$jsonSet`](#jsonset) function was executed, or [`$jsonClear`](#jsonclear) was executed.

### Syntax
```
$jsonJoinArray[Key;...;Separator]
```

#### Parameters
- `Key` `(Type: String || Flag: Required)`: The JSON key to an array which will be retrieved.
- `Separator` `(Type: String || Flag: Required)`: The separator which will separate the JSON keys.

### Example
```
$nomention
$jsonParse[{
    "music": ["Paranoid - MADKID", "Ping! 2 - Exyl", "Tokyo - Leat'eq"\]
}]

Music:
> $jsonJoinArray[music;, ]
```

> We separated the list with `, `.

![](https://user-images.githubusercontent.com/70456337/222919940-4476268b-2e2c-4c2c-afab-e70fbb88c507.png)

## $jsonArrayShift
`$jsonArrayShift` function removes the first element of an array and returns the removed element.

### Syntax
```
$jsonArrayShift[Key;...]
```

#### Parameters
> `Key` `(Type: String || Flag: Required)`: The key of the array from which an element will be removed.

### Example
```
$nomention
$jsonParse[{
    "music": ["Paranoid - MADKID", "Ping! 2 - Exyl", "Tokyo - Leat'eq"\]
}]

Removed: $jsonArrayShift[music]

Current music:
> $jsonJoinArray[music;, ]
```

![](https://user-images.githubusercontent.com/70456337/222919976-4e9d3110-7a5f-4653-bcdd-ceaa8bfa58db.png)

## $jsonArrayPop
`$jsonArrayPop` function removes the last element of an array and returns the removed element.

### Syntax
```
$jsonArrayPop[Key;...]
```

#### Parameters
> `Key` `(Type: String || Flag: Required)`:  The key of the array from which an element will be removed.

### Example
```
$nomention
$jsonParse[{
    "music": ["Paranoid - MADKID", "Ping! 2 - Exyl", "Tokyo - Leat'eq"\]
}]

Removed: $jsonArrayPop[music]

Current music:
> $jsonJoinArray[music;, ]
```

![](https://user-images.githubusercontent.com/70456337/222919990-19229a8d-9e01-49bd-865a-7d5d8a243525.png)

## $jsonArrayUnshift
`$jsonArrayUnfhist` function adds the value in the front of the array.

### Syntax
```
$jsonArrayUnshift[Key;...;Value]
```

#### Parameters
> `Key` `(Type: String || Flag: Required)`: The JSON key where the value will be added.
> `Value` `(Type: Float, String, Bool, Integer || Flag: Required)`: The value to be added.

### Example
```
$nomention
$jsonParse[{
    "music": ["Paranoid - MADKID", "Ping! 2 - Exyl", "Tokyo - Leat'eq"\]
}]

$jsonArrayUnshift[music;Side Character - Cloudfodder]

Music:
> $jsonJoinArray[music;, ]
```

![](https://user-images.githubusercontent.com/70456337/222920006-b4547509-d0bd-49b8-b2cd-9d6510f61df1.png)
