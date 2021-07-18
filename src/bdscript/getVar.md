# $getVar
Gets a global/global-user variable.

## Usage
```
$getVar[variableName;(optional) userID]
```
> 🧙‍♂️ For a global variable, a `userID` doesn't need to be provided. For a global-user variable, `userID` must be provided.

### Breakdown
- `variableName` - The name of the variable to get the value from.
- `userID` - The user to get the value for (if global-user).

## Example
```
$nomention
You have $getVar[Money;$mentioned[1;yes]] coins!
```

![example](https://user-images.githubusercontent.com/69215413/126073974-8fbd707f-aaeb-4500-9db2-7ac923b3df74.png)

### Additional Reading
Check our [Variable Guide](https://nilpointer-software.github.io/bdfd-wiki/guides/variables.html)!
