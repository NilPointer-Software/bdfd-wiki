# $hour
Returns the current hour.

```admonish note
The `$hour` function uses the twenty-four-hour clock instead of two groups of twelve hours; this is also known as "Military Time".
```

## Syntax
```
$hour
```

## Example
```
$nomention
Current Hour: $hour
```

``` discord yaml
- user_id: 729343563401265193
  username: Nicky
  color: "#EE7908"
  content: |
    !hour
- user_id: 566613317972394004
  username: Wiki Bot
  color: "#748BD4"
  bot: true
  content: |
    <div id="hour-mark"></div>
```

```admonish info title="Timezone"
You can use [`$time[]`](./time.md) to change the timezone.
```

<script src="../theme/livetime.js"></script>
