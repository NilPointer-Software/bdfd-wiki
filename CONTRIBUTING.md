# Contributing
You contribute to the BDFD wiki by making a [pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

Make sure to follow the 'Proper Wiki Structure' when contributing.

### Common Issue
- My pull request got merged but isn't shown on the wiki page. Why?
  - The markdown files contributed have to be converted to HTML, then deployed by a developer. You can contribute the the `gh-pages` branch, which is HTML, but the wiki must also be in markdown (HTML is not required to contribute).

## Terms and Guidelines
- You may not be credited for the making of wiki. However, if applicable the Developers reserve the right to give perks/accreditation to users for contributing.
- The name of files must be in the format of `fileName.md`. No spaces or special characters (e.g `$`).
- Do not make duplicates or useless pull requests.
- Do not make troll or NSFW pull requests.
- Fact-check/verify information included in the pull request.

## Proper Wiki Structure
### Grammar
- Don't use gendered pronouns (e.g. she/her/hers/he/him/his). Instead use: They, them, their.
```diff
- He is cool.
+ They are cool.
```
- "we" not "I".
    - Use "we" instead of "I" when referring to yourself.
```diff
- If you use the `$eval` function, I strongly recommend you use `$onlyForIDs`.
+ If you use the `$eval` function, we strongly recommend you use `$onlyForIDs`.
```
- Avoid using these phrases:
```diff
- dumb, weird, stupid, ugly, uneeded, useless, bad, deadly, noob, trash, suck, I don't know, I don't care, idiot
```

### Shortening Headers
Make headers are short as possible.

```diff
- ## How To Create Embeds
+ ## Creating Embeds
```

### Markdown
#### Basic
- \*\*Bold\*\* - **Bold**
- \*Italics\* - *Italics*
- \`code-snippet\`  - `code-snippet`

#### Advanced

**Lists:**

\- item1

\- item2

\- item3

*Output:*
- item1
- item2
- item3

**Large Code Blocks:**

\`\`\`

code

\`\`\`

*Output:*
```
code
```

**Quotes:**

\> This is a quote.

*Output:*
> This is a quote.

#### Headers

\# Title

\## Section

\### Sub-Section

\#### Small-Topic

*Output:*
# Title

## Section

### Sub-Section

#### Small-Topic
