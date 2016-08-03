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
a = b + c
test()

// Good
a = b + c;
test();
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
var string = "<p class='foo'>Lorem Ipsum</p>";

// Good
var string = '<p class="foo">Lorem Ipsum</p>';
```
