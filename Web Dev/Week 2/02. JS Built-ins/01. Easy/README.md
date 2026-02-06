### 1. Write a function `countCharacters` which takes a string as input and returns an object representing the frequency of each character in the string.

```js
  Example:
  - Input: "hello"
  - Output: { h: 1, e: 1, l: 2, o: 1 }

  - Input: "aabbcc"
  - Output: { a: 2, b: 2, c: 2 }

  - Input: ""
  - Output: {}

  Note:
  - The function should count all characters, including spaces and special characters.
  - The function should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countChar`
```

### 2.Write a function `countOccurrences` which takes an array as input and returns an object representing the frequency of each element in the array.

```js
  What is frequency?
  - The frequency of an element is the number of times it appears in the array.

  Example:
  - Input: [10, 20, 10, 30, 20, 20]
  - Output: { 10: 2, 20: 3, 30: 1 }

  - Input: [1, 2, 3, 1, 2, 1]
  - Output: { 1: 3, 2: 2, 3: 1 }

  - Input: []
  - Output: {}

  Once you've implemented the logic, test your code by running
  - `npm run test-occurrences`
```

### 3. Write a function `countVowels` which takes a string as input and returns the count of vowels (both uppercase and lowercase) in the string.

```js
  What are vowels?
  - Vowels are the characters: a, e, i, o, u (case-insensitive).

  Example:
  - Input: "hello world"
  - Output: 3

  - Input: "AEIOUaeiou"
  - Output: 10

  - Input: "xyz"
  - Output: 0

  - Input: ""
  - Output: 0

  Note:
  - The function should count vowels in any alphanumeric string.
  - It should handle empty strings gracefully.

  Once you've implemented the logic, test your code by running
  - `npm run test-countVowels`
```

### 4. Write two functions to generate the Fibonacci sequence:

```

  1. `fibonacci` (Iterative Version):
     - Takes an integer `n` as input and returns an array containing the first `n` numbers in the Fibonacci sequence.
     - The Fibonacci sequence is calculated iteratively.

  2. `fibonacciRecursive` (Recursive Version):
     - Takes an integer `n` as input and returns the `n`-th number in the Fibonacci sequence using recursion.

  What is the Fibonacci sequence?
  - The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers.

  Example:
  - Input: 10
  - Output (Iterative): [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  - Output (Recursive): 34

  - Input: 5
  - Output (Iterative): [0, 1, 1, 2, 3]
  - Output (Recursive): 3

  - Input: 1
  - Output (Iterative): [0]
  - Output (Recursive): 0

  - Input: 0
  - Output (Iterative): []
  - Output (Recursive): 0

  Note:
  - The iterative function should return the first `n` numbers of the sequence.
  - The recursive function should return the `n`-th Fibonacci number (0-based index).

  Once you've implemented the logic, test your code by running
  - `npm run test-fibonacci`
```

### 5.Write a function `reve` which takes a string as input and returns the reversed version of the string.

```js
  What is reversing a string?
  - Reversing a string means rearranging its characters in the opposite order.

  Example:
  - Input: "Sumana"
  - Output: "anamuS"

  - Input: "hello"
  - Output: "olleh"

  - Input: ""
  - Output: ""

  Once you've implemented the logic, test your code by running
  - `npm run test-reverseString`
```
