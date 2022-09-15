# Гипер-ссылки
Гипер-ссылка - это текст, на который можно нажать. Когда пользователь нажимает на текст, пользователя перенаправляет на определенный URL.

## Общие гипер-ссылки
Вы можете использовать гипер-ссылки внутри [`$description[]`](../bdscript/description.md), [`$addField[]`](../bdscript/addField.md), контента/описания [вебхука](../guides/webhooks.md), контента ответа [слеш-команды](../guides/slashCommands.md) и контента эфемерного ответа [`$onInteraction`](../callbacks/onInteraction.md).

### Синтакс
```
[текст\](ссылка)
```
> **Заметка:** Это синтакс для BDScript 2 и BDScript Unstable. Для BDScript используется другой синтакс - `[текст](ссылка)`.

> **Заметка**: В случае использования гипер-ссылок внутри контента ответа слеш-команды или контента эфемерного ответа `$onInteraction`, должен использоваться синтакс от BDScript. Не относится к гипер-ссылкам, которые находятся внутри функций, поддерживающих гипер-ссылки.

### Пример
```
$nomention
$description[This bot is made with [Bot Designer For Discord\](https://botdesignerdiscord.com)]
```
![example](https://user-images.githubusercontent.com/69215413/127039004-e1a607b5-af0f-4761-9d33-954f7dcad155.png)

## Гипер-ссылки внутри поля заголовка
Используйте функцию [$embeddedURL](../bdscript/embeddedURL.md), чтобы добавить гипер-ссылку внутрь [$title](../bdscript/title.md).

## Гипер-ссылки внутри поля автора
Используйте функцию [$authorURL](../bdscript/authorURL.md), чтобы добавить гипер-ссылку внутрь [$author](../bdscript/author.md).
