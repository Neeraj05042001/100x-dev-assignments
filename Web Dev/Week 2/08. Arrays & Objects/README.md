# JavaScript Arrays & Objects Cheatsheet

## 📦 ARRAYS

### Declaration & Initialization

```javascript
// Empty arrays
let arr1 = [];
let arr2 = new Array();
let arr3 = Array();

// With elements
let arr4 = [1, 2, 3, 4, 5];
let arr5 = new Array(1, 2, 3, 4, 5);
let arr6 = Array.of(1, 2, 3, 4, 5);

// Fixed length (creates array with 5 empty slots)
let arr7 = new Array(5);

// From other iterables
let arr8 = Array.from("hello");        // ['h', 'e', 'l', 'l', 'o']
let arr9 = Array.from([1, 2, 3], x => x * 2); // [2, 4, 6]

// Spread operator
let arr10 = [...arr4];                 // Copy array
let arr11 = [0, ...arr4, 6];          // Merge arrays
```

### Accessing Elements

```javascript
let arr = [10, 20, 30, 40, 50];

// By index
arr[0]                    // 10 (first element)
arr[arr.length - 1]       // 50 (last element)
arr.at(0)                 // 10
arr.at(-1)                // 50 (negative indexing)

// Properties
arr.length                // 5
arr[10]                   // undefined (out of bounds)
```

---

## 🔧 ARRAY METHODS

### Adding/Removing Elements

```javascript
let arr = [1, 2, 3];

// Add to end
arr.push(4, 5);           // [1, 2, 3, 4, 5] - returns new length (5)

// Remove from end
arr.pop();                // [1, 2, 3, 4] - returns removed element (5)

// Add to beginning
arr.unshift(0);           // [0, 1, 2, 3, 4] - returns new length (5)

// Remove from beginning
arr.shift();              // [1, 2, 3, 4] - returns removed element (0)

// Add/remove at specific position
arr.splice(1, 2);         // [1, 4] - removes 2 elements from index 1, returns [2, 3]
arr.splice(1, 0, 'a', 'b'); // [1, 'a', 'b', 4] - inserts at index 1
arr.splice(1, 2, 'x');    // [1, 'x', 4] - replaces 2 elements with 'x'
```

### Searching & Finding

```javascript
let arr = [1, 2, 3, 4, 5, 3];

// indexOf/lastIndexOf
arr.indexOf(3);           // 2 (first occurrence)
arr.lastIndexOf(3);       // 5 (last occurrence)
arr.indexOf(10);          // -1 (not found)

// includes
arr.includes(3);          // true
arr.includes(10);         // false

// find/findIndex (first element that satisfies condition)
arr.find(x => x > 3);     // 4
arr.findIndex(x => x > 3); // 3 (index of 4)
arr.findLast(x => x > 3); // 5 (ES2023)
arr.findLastIndex(x => x > 3); // 4 (ES2023)
```

### Iteration Methods

```javascript
let arr = [1, 2, 3, 4, 5];

// forEach (no return value)
arr.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
});

// map (transform each element, returns new array)
let doubled = arr.map(x => x * 2);  // [2, 4, 6, 8, 10]

// filter (keep elements that pass test)
let evens = arr.filter(x => x % 2 === 0); // [2, 4]

// reduce (accumulate to single value)
let sum = arr.reduce((acc, x) => acc + x, 0); // 15
let product = arr.reduce((acc, x) => acc * x, 1); // 120

// reduceRight (reduce from right to left)
let rightSum = arr.reduceRight((acc, x) => acc + x, 0); // 15

// some (at least one element passes test)
arr.some(x => x > 3);     // true

// every (all elements pass test)
arr.every(x => x > 0);    // true
arr.every(x => x > 3);    // false
```

### Sorting & Reversing

```javascript
let arr = [3, 1, 4, 1, 5, 9, 2, 6];

// sort (modifies original, sorts as strings by default)
arr.sort();               // [1, 1, 2, 3, 4, 5, 6, 9]
arr.sort((a, b) => a - b); // Ascending
arr.sort((a, b) => b - a); // Descending

// toSorted (returns new sorted array, ES2023)
let sorted = arr.toSorted((a, b) => a - b); // doesn't modify arr

// reverse (modifies original)
arr.reverse();            // [6, 9, 5, 1, 4, 1, 3, 2]

// toReversed (returns new reversed array, ES2023)
let reversed = arr.toReversed(); // doesn't modify arr
```

### Combining & Slicing

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// concat (combine arrays, returns new array)
let arr3 = arr1.concat(arr2);        // [1, 2, 3, 4, 5, 6]
let arr4 = arr1.concat(arr2, [7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]

// slice (extract portion, returns new array)
arr3.slice(2);            // [3, 4, 5, 6] (from index 2 to end)
arr3.slice(1, 4);         // [2, 3, 4] (from index 1 to 4, not including 4)
arr3.slice(-2);           // [5, 6] (last 2 elements)

// flat (flatten nested arrays)
let nested = [1, [2, 3], [4, [5, 6]]];
nested.flat();            // [1, 2, 3, 4, [5, 6]] (1 level deep)
nested.flat(2);           // [1, 2, 3, 4, 5, 6] (2 levels deep)
nested.flat(Infinity);    // [1, 2, 3, 4, 5, 6] (all levels)

// flatMap (map then flat)
let arr5 = [1, 2, 3];
arr5.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

### Converting to String

```javascript
let arr = [1, 2, 3, 4, 5];

// join (convert to string with separator)
arr.join();               // "1,2,3,4,5" (default separator: comma)
arr.join('');             // "12345"
arr.join(' - ');          // "1 - 2 - 3 - 4 - 5"

// toString
arr.toString();           // "1,2,3,4,5"

// toLocaleString
arr.toLocaleString();     // "1,2,3,4,5" (locale-aware)
```

### Filling & Copying

```javascript
let arr = [1, 2, 3, 4, 5];

// fill (fill with static value)
arr.fill(0);              // [0, 0, 0, 0, 0]
arr.fill(7, 2, 4);        // [0, 0, 7, 7, 0] (fill from index 2 to 4)

// copyWithin (copy part of array to another location)
arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);     // [4, 5, 3, 4, 5] (copy from index 3 to index 0)
arr.copyWithin(1, 3, 4);  // [4, 4, 3, 4, 5]
```

### Modern Array Methods (ES2023+)

```javascript
let arr = [1, 2, 3, 4, 5];

// with (returns new array with element replaced)
let newArr = arr.with(2, 99); // [1, 2, 99, 4, 5] (doesn't modify arr)

// toSpliced (non-mutating splice)
let arr2 = arr.toSpliced(1, 2, 'a', 'b'); // [1, 'a', 'b', 4, 5]
```

### Other Useful Methods

```javascript
// Array.isArray (check if value is array)
Array.isArray([1, 2, 3]); // true
Array.isArray('hello');   // false

// entries, keys, values (iterators)
let arr = ['a', 'b', 'c'];
for (let [index, value] of arr.entries()) {
    console.log(index, value); // 0 'a', 1 'b', 2 'c'
}
for (let index of arr.keys()) {
    console.log(index); // 0, 1, 2
}
for (let value of arr.values()) {
    console.log(value); // 'a', 'b', 'c'
}
```

---

## 🎯 OBJECTS

### Declaration & Initialization

```javascript
// Empty objects
let obj1 = {};
let obj2 = new Object();
let obj3 = Object.create(null); // No prototype

// With properties
let obj4 = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// Computed property names
let key = 'occupation';
let obj5 = {
    name: 'Jane',
    [key]: 'Developer',
    ['is' + 'Active']: true
};

// Shorthand property names
let name = 'Bob';
let age = 25;
let obj6 = { name, age }; // Same as { name: name, age: age }

// Methods
let obj7 = {
    name: 'Alice',
    greet() {
        return `Hello, I'm ${this.name}`;
    },
    // Arrow function (doesn't have own 'this')
    arrowGreet: () => {
        return 'Hello';
    }
};

// Nested objects
let obj8 = {
    person: {
        name: 'Charlie',
        address: {
            city: 'Boston',
            zip: '02101'
        }
    }
};
```

### Accessing Properties

```javascript
let obj = {
    name: 'John',
    age: 30,
    'full name': 'John Doe'
};

// Dot notation
obj.name;                 // 'John'
obj.age;                  // 30

// Bracket notation
obj['name'];              // 'John'
obj['full name'];         // 'John Doe' (required for keys with spaces)

// Dynamic access
let key = 'age';
obj[key];                 // 30

// Optional chaining
obj.address?.city;        // undefined (no error if address doesn't exist)
obj.person?.name?.toUpperCase(); // Safe nested access

// Nullish coalescing
let city = obj.city ?? 'Unknown'; // 'Unknown' if city is null/undefined
```

### Adding/Modifying/Deleting Properties

```javascript
let obj = { name: 'John' };

// Add/modify properties
obj.age = 30;             // Add new property
obj['city'] = 'NYC';      // Add using bracket notation
obj.name = 'Jane';        // Modify existing property

// Delete properties
delete obj.age;           // true (property deleted)
delete obj.nonExistent;   // true (even if property doesn't exist)
```

---

## 🔧 OBJECT METHODS

### Object.keys(), Object.values(), Object.entries()

```javascript
let obj = { a: 1, b: 2, c: 3 };

// Get all keys
Object.keys(obj);         // ['a', 'b', 'c']

// Get all values
Object.values(obj);       // [1, 2, 3]

// Get key-value pairs
Object.entries(obj);      // [['a', 1], ['b', 2], ['c', 3]]

// Convert back from entries
Object.fromEntries([['a', 1], ['b', 2]]); // { a: 1, b: 2 }
```

### Object.assign() - Copy/Merge Objects

```javascript
let target = { a: 1 };
let source1 = { b: 2 };
let source2 = { c: 3, a: 4 };

// Copy properties (shallow copy)
Object.assign(target, source1, source2);
// target is now { a: 4, b: 2, c: 3 }

// Clone object (shallow)
let original = { x: 1, y: 2 };
let clone = Object.assign({}, original);

// Alternative: spread operator
let clone2 = { ...original };
let merged = { ...source1, ...source2 }; // { b: 2, c: 3, a: 4 }
```

### Object.freeze(), Object.seal(), Object.preventExtensions()

```javascript
let obj = { name: 'John', age: 30 };

// freeze (can't add, delete, or modify)
Object.freeze(obj);
obj.age = 40;             // Silently fails (strict mode: throws error)
obj.city = 'NYC';         // Silently fails
delete obj.name;          // Silently fails
Object.isFrozen(obj);     // true

// seal (can modify, but can't add or delete)
let obj2 = { name: 'Jane' };
Object.seal(obj2);
obj2.name = 'Janet';      // Works
obj2.age = 25;            // Silently fails
delete obj2.name;         // Silently fails
Object.isSealed(obj2);    // true

// preventExtensions (can modify and delete, but can't add)
let obj3 = { name: 'Bob' };
Object.preventExtensions(obj3);
obj3.name = 'Robert';     // Works
delete obj3.name;         // Works
obj3.age = 30;            // Silently fails
Object.isExtensible(obj3); // false
```

### Object.create() - Prototypal Inheritance

```javascript
// Create object with specific prototype
let personProto = {
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

let person = Object.create(personProto);
person.name = 'John';
person.greet();           // "Hello, I'm John"

// Create object with null prototype (no inherited properties)
let pureObj = Object.create(null);
pureObj.toString;         // undefined (no Object.prototype methods)
```

### Object.defineProperty() & Object.defineProperties()

```javascript
let obj = {};

// Define a single property with descriptors
Object.defineProperty(obj, 'name', {
    value: 'John',
    writable: true,        // Can be changed
    enumerable: true,      // Shows in for...in, Object.keys()
    configurable: true     // Can be deleted, descriptors can be changed
});

// Define multiple properties
Object.defineProperties(obj, {
    age: {
        value: 30,
        writable: false,   // Read-only
        enumerable: true
    },
    city: {
        value: 'NYC',
        enumerable: false  // Won't show in Object.keys()
    }
});

// Get property descriptor
Object.getOwnPropertyDescriptor(obj, 'name');
// { value: 'John', writable: true, enumerable: true, configurable: true }

// Get all descriptors
Object.getOwnPropertyDescriptors(obj);
```

### Object.hasOwn() & hasOwnProperty()

```javascript
let obj = { name: 'John' };

// Check if property exists (own property, not inherited)
Object.hasOwn(obj, 'name');        // true (modern way, ES2022)
obj.hasOwnProperty('name');        // true (older way)
Object.hasOwn(obj, 'toString');    // false (inherited from prototype)

// in operator (checks own and inherited)
'name' in obj;                     // true
'toString' in obj;                 // true (inherited)
```

### Object.getOwnPropertyNames() & Object.getOwnPropertySymbols()

```javascript
let obj = { a: 1, b: 2 };
Object.defineProperty(obj, 'hidden', {
    value: 'secret',
    enumerable: false
});

// Get all property names (including non-enumerable)
Object.getOwnPropertyNames(obj);  // ['a', 'b', 'hidden']

// Symbol properties
let sym = Symbol('id');
obj[sym] = 123;
Object.getOwnPropertySymbols(obj); // [Symbol(id)]
```

### Object.is() - Equality Comparison

```javascript
// Similar to ===, but with differences for special cases
Object.is(25, 25);        // true
Object.is('foo', 'foo');  // true
Object.is(NaN, NaN);      // true (unlike NaN === NaN which is false)
Object.is(0, -0);         // false (unlike 0 === -0 which is true)
Object.is({}, {});        // false (different references)
```

### Object.getPrototypeOf() & Object.setPrototypeOf()

```javascript
let proto = { greet() { return 'Hello'; } };
let obj = Object.create(proto);

// Get prototype
Object.getPrototypeOf(obj) === proto; // true

// Set prototype (not recommended for performance)
let newProto = { goodbye() { return 'Bye'; } };
Object.setPrototypeOf(obj, newProto);
```

---

## 🔄 ITERATION

### Iterating Over Arrays

```javascript
let arr = ['a', 'b', 'c'];

// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for...of (values)
for (let value of arr) {
    console.log(value);
}

// forEach
arr.forEach((value, index, array) => {
    console.log(index, value);
});

// map (if you need transformed array)
let upper = arr.map(x => x.toUpperCase());
```

### Iterating Over Objects

```javascript
let obj = { a: 1, b: 2, c: 3 };

// for...in (keys, includes inherited enumerable properties)
for (let key in obj) {
    if (obj.hasOwnProperty(key)) { // Filter out inherited
        console.log(key, obj[key]);
    }
}

// Object.keys
Object.keys(obj).forEach(key => {
    console.log(key, obj[key]);
});

// Object.entries (recommended)
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

// Object.values
Object.values(obj).forEach(value => {
    console.log(value);
});
```

---

## 🎭 DESTRUCTURING

### Array Destructuring

```javascript
let arr = [1, 2, 3, 4, 5];

// Basic
let [a, b] = arr;         // a = 1, b = 2

// Skip elements
let [first, , third] = arr; // first = 1, third = 3

// Rest operator
let [x, ...rest] = arr;   // x = 1, rest = [2, 3, 4, 5]

// Default values
let [p, q, r = 10] = [1, 2]; // p = 1, q = 2, r = 10

// Swapping variables
let a1 = 1, b1 = 2;
[a1, b1] = [b1, a1];      // a1 = 2, b1 = 1

// Nested arrays
let nested = [1, [2, 3], 4];
let [n1, [n2, n3], n4] = nested; // n1 = 1, n2 = 2, n3 = 3, n4 = 4
```

### Object Destructuring

```javascript
let obj = { name: 'John', age: 30, city: 'NYC' };

// Basic
let { name, age } = obj;  // name = 'John', age = 30

// Different variable names
let { name: fullName, age: years } = obj;
// fullName = 'John', years = 30

// Default values
let { name, country = 'USA' } = obj;
// name = 'John', country = 'USA'

// Rest operator
let { name, ...otherProps } = obj;
// name = 'John', otherProps = { age: 30, city: 'NYC' }

// Nested objects
let person = {
    name: 'Jane',
    address: {
        city: 'Boston',
        zip: '02101'
    }
};
let { name, address: { city, zip } } = person;
// name = 'Jane', city = 'Boston', zip = '02101'

// Function parameters
function greet({ name, age }) {
    return `Hello ${name}, you are ${age}`;
}
greet(obj); // "Hello John, you are 30"
```

---

## 💡 COMMON PATTERNS & TIPS

### Cloning

```javascript
// Shallow clone
let obj = { a: 1, b: { c: 2 } };
let clone1 = { ...obj };
let clone2 = Object.assign({}, obj);

// Deep clone
let deepClone = JSON.parse(JSON.stringify(obj)); // Simple but limited
// Note: Doesn't work with functions, undefined, symbols, dates, etc.

// Modern deep clone (when available)
let deepClone2 = structuredClone(obj); // Better, handles more types
```

### Checking for Empty

```javascript
// Array
let arr = [];
arr.length === 0;         // true
arr.length > 0;           // false

// Object
let obj = {};
Object.keys(obj).length === 0; // true
```

### Removing Duplicates from Array

```javascript
let arr = [1, 2, 2, 3, 4, 4, 5];

// Using Set
let unique = [...new Set(arr)]; // [1, 2, 3, 4, 5]
let unique2 = Array.from(new Set(arr)); // [1, 2, 3, 4, 5]

// Using filter
let unique3 = arr.filter((item, index) => arr.indexOf(item) === index);
```

### Grouping Array Elements

```javascript
let people = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 30 }
];

// Group by age
let grouped = people.reduce((acc, person) => {
    let key = person.age;
    if (!acc[key]) acc[key] = [];
    acc[key].push(person);
    return acc;
}, {});
// { 25: [{name: 'Jane', age: 25}], 30: [{name: 'John', age: 30}, {name: 'Bob', age: 30}] }

// Using Object.groupBy (ES2024)
let grouped2 = Object.groupBy(people, person => person.age);
```

### Array to Object

```javascript
let arr = [['a', 1], ['b', 2], ['c', 3]];

// Using Object.fromEntries
let obj = Object.fromEntries(arr); // { a: 1, b: 2, c: 3 }

// Using reduce
let obj2 = arr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {});
```

### Flattening Objects

```javascript
// Flatten nested object
function flattenObject(obj, prefix = '') {
    return Object.keys(obj).reduce((acc, key) => {
        const pre = prefix.length ? prefix + '.' : '';
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            Object.assign(acc, flattenObject(obj[key], pre + key));
        } else {
            acc[pre + key] = obj[key];
        }
        return acc;
    }, {});
}

let nested = { a: 1, b: { c: 2, d: { e: 3 } } };
flattenObject(nested); // { a: 1, 'b.c': 2, 'b.d.e': 3 }
```

---

## 📊 PERFORMANCE TIPS

1. **Use `const` for arrays/objects** - Prevents reassignment
2. **Prefer `for...of` over `forEach`** - Faster, can break/continue
3. **Use `Object.hasOwn()` over `hasOwnProperty()`** - Modern, safer
4. **Avoid `delete` for arrays** - Use `splice()` instead
5. **Use `Array.from()` or spread `[...]`** for array-like objects
6. **Cache `length` in loops** - `for (let i = 0, len = arr.length; i < len; i++)`
7. **Use `Map` for frequent additions/deletions** - Better than objects for this
8. **Use `Set` for unique values** - Built-in deduplication

---

## 🚀 ES6+ FEATURES SUMMARY

- **Spread operator**: `[...arr]`, `{...obj}`
- **Rest parameters**: `function(...args)`, `let [a, ...rest]`
- **Destructuring**: `let {x, y} = obj`, `let [a, b] = arr`
- **Template literals**: `` `Hello ${name}` ``
- **Arrow functions**: `arr.map(x => x * 2)`
- **Optional chaining**: `obj?.prop?.nested`
- **Nullish coalescing**: `value ?? default`
- **Computed properties**: `{[key]: value}`
- **Method shorthand**: `{method() {}}`
- **Array methods**: `find`, `findIndex`, `includes`, `flat`, `flatMap`
- **Object methods**: `Object.entries`, `Object.values`, `Object.fromEntries`

---

This cheatsheet covers all major array and object operations in JavaScript!
