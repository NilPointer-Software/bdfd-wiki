# Math

### Addition
`$sum[x;y]` - Returns the sum of x and y.

| Example | Output 
| :---- | :-----
| `$sum[5;5]` | 10
| `$sum[100;10]` | 110
| `$sum[959;100]` | 1059

> See documentation for [`$sum[]`](/src/bdscript/sum.md)

### Subtraction
`$sub[x;y]` - Returns the subtraction of x and y.

| Example | Output 
| :---- | :-----
| `$sub[5;5]` | 0
| `$sub[100;10]` | 90
| `$sub[959;100]` | 859

> See documentation for [`$sub[]`](/src/bdscript/sub.md)

### Multiplication
`$multi[x;y]` - Returns the multiplication of x and y.

| Example | Output 
| :---- | :-----
| `$multi[5;5]` | 25
| `$multi[100;10]` | 1000
| `$multi[959;100]` | 95900

> See documentation for [`$multi[]`](/src/bdscript/multi.md)

### Division
`$divide[x;y]` - Returns the division of x and y.

| Example | Output 
| :---- | :-----
| `$divide[5;5]` | 1
| `$divide[100;10]` | 10
| `$divide[959;100]` | 9
| `$enableDecimals[yes] $divide[959;100]` | 9.59

> See documentation for [`$divide[]`](/src/bdscript/divide.md)

### Modulus
`$modulo[x;y]` - Returns the remainder after dividing one number by another.

| Example | Output 
| :---- | :-----
| `$modulo[5;5]` | 0
| `$modulo[162;10]` | 2
| `$modulo[959;100]` | 59

> See documentation for [`$modulo[]`](/src/bdscript/modulo.md)

### Calculations
`$calculate[]` - Calculates a math expression.

| Example | Output 
| :---- | :-----
| `$calculate[10+5*2]` | 20
| `$calculate[(10+5*2)]` | 30
| `$calculate[62356/10]` | 6235
| `$calculate[62356.0/10.0]` | 6235.6

> See documentation for [`$calculate[]`](/src/bdscript/calculate.md)

### Separating Thousands in a Number
`$numberSeparator[number;(seprator)]` - Makes the thousands in a number separated.

> 🤔 **Explanation:** Separating the Thousands in a Number, is a form of [Digit Grouping](https://en.wikipedia.org/wiki/Decimal_separator#Digit_grouping). `100000` becomes `100,000`, `1000` becomes `1,000`, etc.

> See documentation for [`$numberSeparator[]`](/src/bdscript/numberSeparator.md)