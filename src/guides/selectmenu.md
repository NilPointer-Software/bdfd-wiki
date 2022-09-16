# Меню
В этом разделе вы научитесь тому, как использовать компоненты меню.\
![demonstration](https://user-images.githubusercontent.com/16838075/124397105-2e3d9300-dd0e-11eb-898e-8cf0228d3cf4.png)
![demonstration with options](https://user-images.githubusercontent.com/16838075/124397186-cc315d80-dd0e-11eb-93d2-3ea8eaa99612.png)


## Создание меню
`$newSelectMenu[interaction ID;min values to select;max values to select;placeholder;messageID(optional)]`
- `interaction ID` - Используется в обратном вызове `$onInteraction[ID]`. Работает точно так же, как и с [кнопками](./buttons.md)
- `min values to select` - Минимальное количество опций, которое можно выбрать.
- `max values to select` - Максимальное количество опций, которое можно выбрать.
- `placeholder` - Текст, который показывается тогда, когда опция не выбрана.
- `messageID(optional)` - ID сообщения, к которому должно добавиться меню. По умолчанию - это ответ бота.

## Добавление опций в меню
`$addSelectMenuOption[select menu's interaction ID;label;value;description;default (yes/no);emoji (can be left empty);messageID (optional)]`
- `select menu's interaction ID` - Должно быть таким же, как и в `$newSelectMenu[]`.
- `label` - Название опции.
- `value` - Это данные, которые передаются в обратный вызов. **Значение должно быть уникальным для каждой опции в меню!**
- `description` - Это то, что показывается под названием опции.
- `default (yes/no)` - Определяет, должна ли опция быть выбрана по умолчанию. **Может быть только одна опция по умолчанию!**
- `emoji` - Эмодзи, показываемый перед названием опции.
- `messageID (optional)` - Точно так же, как и в `$newSelectMenu[]`.

## Пример
Код меню:\
![select menu code](https://user-images.githubusercontent.com/16838075/124397834-92faec80-dd12-11eb-9bed-8fd6ad2fca15.jpg)

Код взаимодействия:\
![interaction code](https://user-images.githubusercontent.com/16838075/124397855-b160e800-dd12-11eb-961c-82b2692f1ea9.jpg)

Использование:\
![before using](https://user-images.githubusercontent.com/16838075/124397867-cfc6e380-dd12-11eb-9392-a51a3082f39e.png)
![after using](https://user-images.githubusercontent.com/16838075/124397887-fe44be80-dd12-11eb-96fb-573e2f94f126.png)

