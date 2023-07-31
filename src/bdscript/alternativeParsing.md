# $alternativeParsing
Changes the way how triggers are read.

## Syntax
```
$alternativeParsing
```
> This function was added at the end of 2019 as an experiment, and it can be unstable and break your commands. You should not use `$alternativeParsing` when making your bot.

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
    ### With `$alternativeParsing`
    ``` discord yaml
    - user_id: 729343563401265193
      username: Nicky
      color: "#EE7908"
      content: |
        hello
    
    - user_id: 566613317972394004
      username: Wiki Bot
      color: "#748BD4"
      bot: true
      verified: true
      content: " "
      embed:
        description: "\"hello\""
    
    - user_id: 729343563401265193
      username: Nicky
      color: "#EE7908"
      content: |
        helloworld
    
    - user_id: 566613317972394004
      username: Wiki Bot
      color: "#748BD4"
      bot: true
      verified: true
      content: " "
      embed:
        description: "\"helloworld\""
    ```
    \
    ### Without `$alternativeParsing`
    ``` discord yaml
    - user_id: 729343563401265193
      username: Nicky
      color: "#EE7908"
      content: |
        hello
    
    - user_id: 566613317972394004
      username: Wiki Bot
      color: "#748BD4"
      bot: true
      verified: true
      content: " "
      embed:
        description: "\"hello\""
    
    - user_id: 729343563401265193
      username: Nicky
      color: "#EE7908"
      content: |
        helloworld
    
    - user_id: 566613317972394004
      username: Wiki Bot
      color: "#748BD4"
      bot: true
      verified: true
      content: " "
      embeds:
      - description: "\"helloworld\""
      - description: "\"hello\""
    ```
