## Functional JavaScript

We are going to solve tasks with as less for and while loops as possible.

We are going to take advantage of the higher-order functions that are available (And we are going to implement.)

Our basis will be:

* `map`
* `filter`
* `reduce`
* `all`
* `any`

First, we are going to understand what types we have in JavaScript:

## Types and typeof

JavaScript is a dynamic language, which means that we do not explicitly declare the types of our variables.

But there are types. In JavaScript, we have a `typeof` operator which returns the __string representation__ of the type.

We have the following types:

```javascript
'use strict';

// list with different types in JavaScript
var types = [
    5, // 'number'
    'You look good!', // 'string'
    { 'name': 'Dude1' }, // 'object'
    function (x) {
        return x * x;
    }, // 'function'
    [1, 2, 3], // 'object' :(
    true // 'boolean'
];

types.forEach(function (value) {
    console.log(value, typeof value);
});

var a = 5;

if (typeof a === 'number') {
    console.log(a + ' is a number');
}
```


TODO: What is predicate? Materials.