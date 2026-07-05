# $alternativeParsing
<div class="functionTags">
  <span id="DangerousTag">Dangerous</span>
  <span id="ExperimentTag">Experiment</span>
</div>

<style>
.discord-messages {
    margin-top: .5rem;
    margin-bottom: .5rem;
}
</style>

Changes the way how triggers are read.

## Syntax
```
$alternativeParsing
```

```admonish fail
This function was added at the end of 2019 as an experiment, and it can be unstable and break your commands. You should not use `$alternativeParsing` when making your bot.
```

## Example
1. Create two commands and set the trigger `hello` for one command and `helloworld` for the other.
2. Add the `$alternativeParsing` function to the command code with the `hello` trigger.

    Code with trigger `hello`:
    ```
    $nomention
    $alternativeParsing
    $description["hello"]
    ```
    Code with trigger `helloworld`:
    ```
    $nomention
    $description["helloworld"]
    ```
3. Execute commands.
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    hello
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: <none>
  embed:
    description: "\"hello\""
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    helloworld
    
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: <none>
  embed:
    description: "\"helloworld\""
```

~~~admonish example

- Without `$alternativeParsing`:

``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    hello
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: <none>
  embed:
    description: "\"hello\""
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  content: |
    helloworld
- user_id: 1009018156494368798
  username: BDFD Support
  color: "#378afa"
  bot: true
  verified: true
  content: <none>
  embeds:
    - description: "\"helloworld\""
    - description: "\"hello\""
```

~~~