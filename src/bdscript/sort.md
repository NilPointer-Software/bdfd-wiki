# $sort
Sorts the provided numbers. 

## Usage
```
$sort[numbers;sortType (asc/desc);amountOfNumbersToReturn;separator] - 
```

### Breakdown
- `numbers` - The numbers to sort, separated by `;`.
- `sortType` - Whether numbers should be sorted ascendingly (smallest to biggest) or descendingly (biggest to smallest). `asc` stands for ascending, `desc` stands for descending.
- `amountOfNumbersToReturn` - How many sorted `numbers` should be returned. Can be set to `-1` if you'd like to return every number.
- `separator` - The separator between each sorted number.

## Examples
### Example #1
```
$sort[167;100;152;asc;-1;,]
$c[Returns 100, 152, 167]
```
### Example #2
```
$sort[167;100;152;desc;-1;, ]
$c[Returns 167, 152, 100]
```
