# $clear
Deletes a certain amount of messages.

> When using just `$clear`, the author's message must include a number.

## Syntax
```
$clear
```

> Discord doesn't allow deleting messages in bulk which are over 2 weeks old.

### Permissions
Required permissions that the bot must have for this function to work properly:
- `managemessages`

## Example
```
$nomention
$deletecommand
$clear
```

### Before
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  content: |
    5
- user_id: 729343563401265193
  username: Nicky
  color: "#509070"
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/34462b51-de96-4a43-b085-3babc085f70b
  content: |
    4
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#f1bdee"
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/1ecd3b3a-4bdf-441a-98ad-361254426a74
  content: |
    3
- user_id: 437154602626973697
  username: Kito
  color: "#4365ab"
  avatar: https://github.com/Rainb0wKey/bdfd-wiki/assets/113303649/5d649ade-b7d9-471f-84d0-8cc36b4fa76e
  content: |
    2
- user_id: 325663449680052227
  username: Emperor Toaster
  color: "#939394"
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/06e0dcd9-3668-4d51-ad7b-3e7d68e5021a
  content: |
    1
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  content: |
    !example 3
```
\
### After
``` discord yaml
- user_id: 803569638084313098
  username: RainbowKey
  color: "#E67E22"
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/a9034fd5-40c2-4320-a408-2f2ee0071d9d
  content: |
    5
- user_id: 729343563401265193
  username: Nicky
  color: "#509070"
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/34462b51-de96-4a43-b085-3babc085f70b
  content: |
    4
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#f1bdee"
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/1ecd3b3a-4bdf-441a-98ad-361254426a74
  content: |
    3
```
