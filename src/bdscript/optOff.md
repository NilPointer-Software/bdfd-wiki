# $optOff
Can only be used in **BDScript 2**. Executes functions with turned off optimizations.

> As stated in the function description, `$optOff` disables the optimization of the functions in its arguments.\
This means that functions such as `$random`, `$randomText` and others won't return the previous response, but instead a new response will be returned.

## Syntax
```
$optOff[Functions to be executed]
```

### Parameters
- `Functions to be executed` `(Type: String || Flag: Emptiable)`: The functions to execute with turned off optimizations.

## Example
Let's try to run this simple code without `$optOff`:
```
The 1st random: $random[1;101]
The 2nd random: $random[1;101]
The 3rd random: $random[1;101]
```
![Example](https://user-images.githubusercontent.com/70456337/206849839-8c9fc256-f16f-41f2-aaab-a3e8b65dbebb.png)

As we can see, all three randoms returned the same number. Let's fix this by adding `$optOff`:
```
$optOff[
The 1st random: $random[1;101]
The 2nd random: $random[1;101]
The 3rd random: $random[1;101]
]
```
![Example](https://user-images.githubusercontent.com/70456337/206849845-79dd7f5c-382f-43c6-a9b0-8918af260715.png)

But what if we want to make only the 1st random different from others? In that case we shouldn't put all this code into `$optOff`, but only put a particular random into it - the 2nd one:
```
The 1st random: $random[1;101]
The 2nd random: $optOff[$random[1;101]]
The 3rd random: $random[1;101]
```
![Example](https://user-images.githubusercontent.com/70456337/206849854-7d5c9f16-24fc-4889-b9bf-9a3cda810699.png)
> As you can see, the 3rd random will inherit the response of the 2nd one, since it's not included in `$optOff`.
