# Contributing
Hey! 👋 Thanks for checking out. If you would like to contribute to this repository, do not hesitate! Pull requests are always welcome at any hour.

> **Note** : Contributions to this repository are generally made by submitting a pull request.
If you are comparatively new to GitHub or aren't familiar with how to submit a pull request, enlighten yourself a bit by checking [GitHub docs](https://docs.github.com/en/pull-requests)
or you can also ask anyone from the active [contributors](https://github.com/NilPointer-Software/bdfd-wiki/graphs/contributors) to submit your contributions on your behalf.

## Guidelines
General guidelines to keep in mind when contributing :
- All file names must be in "[lowerCamelCase](https://wiki.c2.com/?LowerCamelCase)" format (i.e `fileName.md`).
- Avoid using spaces or any special characters (e.g `$`) in file names.
- Do not make duplicates or useless pull requests.
- Do not make troll or NSFW pull requests.
- Do not make huge pull requests. Keep them small.
- Fact-check/verify information included in the pull request.
- Make sure to follow [Proper Wiki Structure](#proper-wiki-structure).

## FAQs
Some of the frequently asked questions from users -
1. My pull request has been merged but it isn't showing up on the wiki page. Why?

   Once a pull request is merged successfully, the changes can be seen in [Nightly Wiki](https://nilpointer-software.github.io/bdfd-wiki/nightly) after 2-3 minutes. In the case of [Main Wiki](https://nilpointer-software.github.io/bdfd-wiki), it will take some weeks since the contributed markdown files are deployed by a Developer only.

2. Do I get any perks for contributing?

   You are credited for your contributions to the wiki here on GitHub, by being shown as a contributor.
   However, if applicable the Developers reserve the right to give perks/accreditation to users for contributing.

3. Any correct steps to submit contributions?

   Follow the steps described below :
   - Fork the repository.
   - Create a new branch from `dev` branch.
   - Do the required changes in the new branch and then, submit a pull request.
   - Once, the pull request has been merged successfully, fetch the upstream in `dev` branch *(Optionally, you can also delete the pull request branch if you want)*.
   - That's it...Happy Contributing!!

## Proper Wiki Structure

### Grammar
- Don't use gendered pronouns *(i.e She/Her/Hers or He/Him/His)*, instead use neutral pronouns *(i.e They, Them, Their)*.
- Use *"We"* instead of *"I"* when referring to yourself.
- Use *"You/Your"* instead of *"We/Our"* when referring to the reader.
- Avoid using offensive phrases or words *(i.e dumb, useless, bad, trash, suck etc)*.

### Shortening Headers
Always keep section headers short, consise, and in [Title Case](https://en.m.wikipedia.org/wiki/Title_case) format. For example,

```diff
- How to create embeds
+ Creating Embeds
```

### Markdown
Markdown allows you to make headings, format text, make lists and tables.

---
#### Text Formatting
| Name | Sign |
| :---: | :---: |
| *Italics* | \*...\* or \_...\_ |
| **Bold** | \*\*...\*\* or \_\_...\_\_ |
| ~~Line-Through~~ | \~\~...\~\~ |
| `Code Snippet` | \`...\` |

---
#### Lists
\- Item 1\
\- Item 2\
\- Item 3
##### Output
- Item 1
- Item 2
- Item 3

---
#### Large Code Block
\`\`\`\
Large Code Block\
\`\`\`
##### Output
```
Large code block
```
---
#### Quotes
\> This is a quote.
##### Output
> This is a quote.

---
#### Headers
| Name | Sign |
| :---: | :---: |
| Title | # |
| Section | ## |
| Sub-Section | ### |
| Small-Topic | #### |
| Sub-Small-Topic | ##### |
##### Output
# Title
## Section
### Sub-Section
#### Small-Topic

##### Sub-Small-Topic

---
#### Tables

1. Centered Text
   ```
   | Name | Value |
   | :---: | :---: |
   | Name | Value |
   | Name | The Longest Value |
   | Name | Value |
   | Name | Value |
   | Name | Value |
   ```
   ##### Output
   | Name | Value |
   | :---: | :---: |
   | Name | Value |
   | Name | The Longest Value |
   | Name | Value |
   | Name | Value |
   | Name | Value |
2. Uncentered Text
   ```
   | Name | Value |
   | --- | --- |
   | Name | Value |
   | Name | The Longest Value |
   | Name | Value |
   | Name | Value |
   | Name | Value |
   ```
   ##### Output
   | Name | Value |
   | --- | --- |
   | Name | Value |
   | Name | The Longest Value |
   | Name | Value |
   | Name | Value |
   | Name | Value |

## Discord code blocks

Our wiki uses custom markdown code blocks to generate Discord message previews.
In order to create them, wiki contributors write `discord` code blocks.

Currently, only one variant is available, the `discord yaml` code block.
It utilizes the YAML language to write these Discord messages.

Example:
``` yaml
- user_id: 154148273307910144
  username: MineBartekSA
  color: "#E67E22"
  content: |
    Hi, this is an example of custom code blocks.
- username: BDFD Support
  avatar: https://github.com/NilPointer-Software/bdfd-wiki/assets/113303649/e5fdc906-6c14-4e19-91c0-4ce95b852c61
  color: "#378afa"
  bot: true
  verified: true
  content: |
    This is another message
- username: NilPointer Software
  avatar: https://avatars.githubusercontent.com/u/63750675
  bot: true
  verified: true
  content: |
    For more information about supported features, please see <a href="https://github.com/NilPointer-Software/mdbook-discord-components/">this GitHub repository</a>
```

Like the last message in the example says, please check out the [NilPointer-Software/mdbook-discord-components](https://github.com/NilPointer-Software/mdbook-discord-components/) repository for more info about supported features.

To test your custom code block, you can use the [official test site](https://nilpointer-software.github.io/mdbook-discord-components/)
> Please note, that the `user_id` field will not work on the test site. This feature is disabled on it.

### Things to note

- In order to format messages or embed content like you can on Discord, you need to use HTML tags instead of markdown.
  Please look at the example below on the [test site](https://nilpointer-software.github.io/mdbook-discord-components/) to see how they will actually look.
``` yaml
- user_id: 154148273307910144
  username: MineBartekSA
  content: |
    For <code>*Italics*</code> use the <code>i</code> HTML tag: <i>Italics</i>
    For <code>**Bold**</code> use the <code>b</code> HTML tag: <b>Bold</b>
    For <code>~~Line-Through~~</code> use the <code>del</code> HTML tag: <del>Line-Through</del>
    For <code>`Code Snippet`</code> use the <code>code</code> HTML tag: <code>Code Snippet</code>
    For <code>__Underline__</code> use the <code>u</code> HTML tag: <u>Underline</u>
    For <code>> Quote</code> use the <code>discord-quote</code> HTML tag: <discord-quote>Quote</discord-quote>
- user_id: 154148273307910144
  username: MineBartekSA
  content: |
    You can make spoilers by using the <code>discord-spoiler</code> HTML tag: <discord-spoiler>Spoiler!</discord-spoiler>
- user_id: 154148273307910144
  username: MineBartekSA
  content: |
    You can embed links by using the <code>a</code> HTML tag with the <code>href</code> attrubute: <a href="https://nilpointer-software.github.io/mdbook-discord-components/">Test site</a>
- user_id: 154148273307910144
  username: MineBartekSA
  content: " "
  embed:
    title: Embed Text Formatting
    color: "#00FFFF"
    description: |
      <i>Italics</i>, <b>Bold</b>, <del>Line-Truough</del>, <u>Underline</u>, <a href="https://nilpointer-software.github.io/mdbook-discord-components/">Links</a>, and <code>Code Snippets</code> use the same HTML tags.
      
      Embeds can contain multiline code blocks.
      Add a <code>multiline</code> class to a <code>code</code> HTML tag:
      <code class="multiline">This is a large code block.
      It supports multiple lines.
      </code>
      Quotes use the <code>blockquote</code> HTML tag: <blockquote>Quote</blockquote>
      Spoiler use the <code>span</code> HTML tag with the <code>spoiler</code> class:
      <span class="spoiler">Spoiler</span>
```
> Please note, that the empty `content` filed in the message with embed is a bug that will be resolved.

- On our wiki, messages can use the `user_id` yaml field for automatic and up-to-date avatar and username.
  When using `user_id`, the `username` field is no longer required and will overwrite the username fetched from Discord.
  The same thing applies to the `avatar` field.
