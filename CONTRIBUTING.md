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