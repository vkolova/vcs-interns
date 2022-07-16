### _> Without them!

Implement a function `without` with the following signature:

```javascript
var without = function(exclude, arr) {

}
```
`arr` and `exclude` are lists.
The function should return a new list, removing all elements from `exclude` in `arr`.

For example:

```javascript
console.log(without([5,6], [1,2,3,4,5,6]); // [1,2,3,4]
```
### _> Zip!

Implement a function, called `zip` which takes a various number of arguments - all lists.

The function returns a new list, which merges together the values of each of the arrays with the values at the corresponding position.

Signature:

```javascript
var zip = function () {
  // this is how variable arguments is passed to the function
  // there is a variable called arguments
  // that is visible in the function
  console.log(arguments);
}
```

Example:

```javascript
console.log(zip([1, 2, 3], [4, 5, 6]));
// [ [1, 4], [2, 4], [3, 6] ]

console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));
// [ [1, 4, 7], [2, 4, 8], [3, 6, 9] ]
```

### _> Histogram of words

Implement a function, called `wordsHistogram(str)` which takes a string and returns an object, representing the histogram of the words in the given string.

A histogram is the following:

```javascript
{
    'word' : count
}
```

Where count is the number of times the word is found in the given string.

There are two very important specifications for the function:

* Everything must be converted to lowercase, before running the histogram
* You should exclude all punctuation from the string - `!?,.` etc.

For example:

```javascript
var str = 'A function is a function with a very functional function!'
wordsHistogram(str);
```

Will output:

```javascript
{
    'a' : 3,
    'function' : 3,
    'is' : 1,
    'with' : 1,
    'very' : 1,
    'functional' : 1
}
```

### _> Histogram of characters

Implement a function, called `charsHistogram(str)` which takes a string and outputs a histogram of the characters in the string.

There are two very important specifications for the function:

* Everything must be converted to lowercase, before running the histogram.
* Don't count white space.
* You should exclude all punctuation from the string - `!?,.` etc.

For example:

```javascript
var str = 'Count the characters in this very profound sentence';
console.log(charsHistogram(str));
```

Will output:

```javascript
{ c: 4,
  o: 3,
  u: 2,
  n: 5,
  t: 5,
  h: 3,
  e: 6,
  a: 2,
  r: 4,
  s: 3,
  i: 2,
  v: 1,
  y: 1,
  p: 1,
  f: 1,
  d: 1 }
```

### _> Unordered lists and ordered lists

Implement two functions - `ol` and `ul` that takes a list of `items`:

```javascript
var items = [{ 'label' : 'Item 1'}, { 'label' : 'Item 2'}, ...]
```

`ul` and `ol` have the following signature:

```javascript
var ul = function(items) {

};

var ol = function(items) {

};
```

Both functions output an HTML string - ordered or unordered lists, constructed from `items` where the text in each `<li>` is the value of each `label` key.


For example:

```javascript
var items = [{ 'label' : 'Item 1'}, { 'label' : 'Item 2'}]
var htmlOl = ol(items);
```

`htmlOl` will be:

```html
<ol>
<li>Item 1</li>
<li>Item 2</li>
</ol>
```

### _> Nested lists

Alter the `ol` and `ul` functions, so they can output [nested lists](http://www.w3schools.com/html/tryit.asp?filename=tryhtml_lists2).

`items` will be altered, so each object can have a `children` key.
For example:


```javascript
var items = [{ 'label' : 'Item 1'},
             { 'label' : 'Item 2', 'children' : [
                {
                    'label' : 'Level 2 of Item 2'
                },
                {
                    'label' : 'Another level 2'
                }
             ]}];

```

`ol(items)` will output:

```html
<ol>
    <li>Item 1</li>
    <li>Item 2
        <ol>
          <li>Level 2 of Item 2</li>
          <li>Another level 2</li>
        </ol>
    </li>
</ol>
```