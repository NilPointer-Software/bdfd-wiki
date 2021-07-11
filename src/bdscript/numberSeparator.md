# $numberSeparator
Separates the thousands in a number.

## Usage
```
$numberSeparator[number;(optional) separator]
```

### Breakdown
`number` - The number to apply the separator to.

`separator` - The separator between each thousand. Default is `,`. Optional.

## Example
```
$nomention
$numberSeparator[5000]
```
> This example would return `5,000`.
