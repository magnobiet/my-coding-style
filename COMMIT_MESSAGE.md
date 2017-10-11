# `git commit` message styleguide

## The reasons for these conventions

- Automatic generating of the changelog
- Provide better information when browsing the history

## Format of the commit message

```diff
<type>(<scope>): <subject>

<body>

<footer>
```

### `<type>` values

| Commit type                 | Emoji                                        | Emojipedia                                              |
| --------------------------- | -------------------------------------------- | ------------------------------------------------------- |
| Initial Commit              | :tada: Party Popper                          | http://emojipedia.org/party-popper/                     |
| Version Tag                 | :bookmark: Bookmark                          | http://emojipedia.org/bookmark/                         |
| New Feature (feat)          | :sparkles: Sparkles                          | http://emojipedia.org/sparkles/                         |
| Bugfix (fix)                | :bug: Bug                                    | http://emojipedia.org/bug/                              |
| Security Fix                | :lock: Lock                                  | https://emojipedia.org/lock/                            |
| Metadata                    | :card_index: Card Index                      | http://emojipedia.org/card-index/                       |
| Refactoring (refactor)      | :recycle: Black Universal Recycling Symbol   | http://emojipedia.org/black-universal-recycling-symbol/ |
| Documentation (docs)        | :books: Books                                | http://emojipedia.org/books/                            |
| Internationalization (i18n) | :globe_with_meridians: Globe With Meridians  | http://emojipedia.org/globe-with-meridians/             |
| Accessibility               | :wheelchair: Wheelchair                      | https://emojipedia.org/wheelchair-symbol/               |
| Performance                 | :racehorse: Horse                            | http://emojipedia.org/horse/                            |
| Cosmetic (style)            | :art: Artist Palette                         | http://emojipedia.org/artist-palette/                   |
| Tooling                     | :wrench: Wrench                              | http://emojipedia.org/wrench/                           |
| Tests (test)                | :rotating_light: Police Cars Revolving Light | http://emojipedia.org/police-cars-revolving-light/      |
| Deprecation                 | :hankey: Pile of Poo                         | http://emojipedia.org/pile-of-poo/                      |
| Removal                     | :wastebasket: Wastebasket                    | http://emojipedia.org/wastebasket/                      |
| Work In Progress (WIP)      | :construction:  Construction Sign            | http://emojipedia.org/construction-sign/                |
| Revert (revert)             | :back: Back With Leftwards Arrow Above       | https://emojipedia.org/back-with-leftwards-arrow-above/ |
| Maintain (chore)            | -                                            | -                                                       |

### Message `<body>`, `<subject>`

Uses the imperative, present tense: "change" not "changed" nor "changes".

### Message `<footer>`

#### Referencing issues

- https://help.github.com/articles/autolinked-references-and-urls/
- https://help.github.com/articles/closing-issues-using-keywords/

## Generating `CHANGELOG.md`

List of all subjects since last release

```bash
git log <LAST_TAG> HEAD --pretty=format:%s
```

New features in this release


```bash
git log <LAST_RELEASE> HEAD --grep feature
```

## References

- https://chris.beams.io/posts/git-commit/
- https://karma-runner.github.io/1.0/dev/git-commit-msg.html
- https://github.com/dannyfritz/commit-message-emoji
