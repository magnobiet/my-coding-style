# My Coding Style

## TL;DR

- [.editorconfig](http://editorconfig.org/)

### HyperText Markup Language

...

### Cascading Style Sheets

...

### JavaScript

#### Semicolons

```js
// Bad
baz = foo + bar
foobar()

// Good
baz = foo + bar;
foobar();
```

#### Variables

```js
// Bad
var foo = '';
var bar = '';

// Good
var foo = '',
    bar = '';
```

##### Constants

```js
// Bad
var foo = 'foo';

// Good
var FOO = 'foo';
```

#### Strings

```js
// Bad
var foo = "<p class='foo'>Lorem Ipsum</p>";

// Good
var foo = '<p class="foo">Lorem Ipsum</p>';
```
