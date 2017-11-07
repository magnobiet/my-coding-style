# Git styleguide

## Branch

![gitflow](http://nvie.com/img/git-model@2x.png)

## Commit

### The reasons for these conventions

- Automatic generating of the changelog
- Provide better information when browsing the history

### Format of the commit message

```diff
<type>(<scope>): <subject>

<body>

<footer>
```

#### `<type>` values

| Commit type                 | Emoji                                        |
| --------------------------- | -------------------------------------------- |
| Initial Commit              | :tada: Party Popper                          |
| Version Tag                 | :bookmark: Bookmark                          |
| New Feature (feat)          | :sparkles: Sparkles                          |
| Bugfix (fix)                | :bug: Bug                                    |
| Security Fix                | :lock: Lock                                  |
| Metadata                    | :card_index: Card Index                      |
| Refactoring (refactor)      | :recycle: Black Universal Recycling Symbol   |
| Documentation (docs)        | :books: Books                                |
| Internationalization (i18n) | :globe_with_meridians: Globe With Meridians  |
| Accessibility               | :wheelchair: Wheelchair                      |
| Performance                 | :racehorse: Horse                            |
| Cosmetic (style)            | :art: Artist Palette                         |
| Tooling                     | :wrench: Wrench                              |
| Tests (test)                | :rotating_light: Police Cars Revolving Light |
| Deprecation                 | :hankey: Pile of Poo                         |
| Removal                     | :wastebasket: Wastebasket                    |
| Work In Progress (WIP)      | :construction:  Construction Sign            |
| Revert (revert)             | :back: Back With Leftwards Arrow Above       |
| Maintain (chore)            | -                                            |

#### Message `<body>`, `<subject>`

Uses the imperative, present tense: "change" not "changed" nor "changes".

#### Message `<footer>`

##### Referencing issues

- https://help.github.com/articles/autolinked-references-and-urls/
- https://help.github.com/articles/closing-issues-using-keywords/

## Generating `CHANGELOG.md`

List of all subjects since last release

```bash
git log <LAST_TAG> HEAD --pretty=format:%s
```

New features in this release

```bash
git log <LAST_RELEASE> HEAD --grep feat
```

## References

- http://nvie.com/posts/a-successful-git-branching-model/
- https://github.com/petervanderdoes/gitflow-avh
- http://semver.org/
- https://chris.beams.io/posts/git-commit/
- https://karma-runner.github.io/1.0/dev/git-commit-msg.html
- https://github.com/dannyfritz/commit-message-emoji
