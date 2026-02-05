# QUESTIONS FOR JS [ WEEKEND ]:

TOTAL - 40

# 🔹 20 basic (Objects + Arrays)

1. **Sum values in object arrays**
    - Input:
        
        ```jsx
        { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
        
        ```
        
    - Output:
        
        ```jsx
        { food: 60, travel: 20, bills: 100 }
        
        ```
        
2. **Count word occurrences in array**
    - Input:
        
        ```jsx
        ["apple", "banana", "apple", "orange", "banana", "apple"]
        
        ```
        
    - Output:
        
        ```jsx
        { apple: 3, banana: 2, orange: 1 }
        
        ```
        
3. **Swap keys and values of object**
    - Input:
        
        ```jsx
        { a: "x", b: "y", c: "z" }
        
        ```
        
    - Output:
        
        ```jsx
        { x: "a", y: "b", z: "c" }
        
        ```
        
4. **Find the largest value key**
    - Input:
        
        ```jsx
        { a: 10, b: 50, c: 20 }
        
        ```
        
    - Output:
        
        ```
        b
        
        ```
        
5. **Flatten object of arrays into one array**
    - Input:
        
        ```jsx
        { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
        
        ```
        
    - Output:
        
        ```jsx
        ["apple", "banana", "carrot", "pea"]
        
        ```
        
6. **Group people by city**
    - Input:
        
        ```jsx
        [
          { name: "A", city: "Delhi" },
          { name: "B", city: "Mumbai" },
          { name: "C", city: "Delhi" }
        ]
        
        ```
        
    - Output:
        
        ```jsx
        { Delhi: ["A", "C"], Mumbai: ["B"] }
        
        ```
        
7. **Filter object by values > 50**
    - Input:
        
        ```jsx
        { a: 20, b: 60, c: 40, d: 90 }
        
        ```
        
    - Output:
        
        ```jsx
        { b: 60, d: 90 }
        ```
        
8. Find student with highest average mark
    - Input:
        
        ```jsx
        { A: [80, 90], B: [70, 75, 85] }
        ```
        
    - Output:
        
        ```jsx
        A
        ```
        
9. **Unique values across all object arrays**
    - Input:
        
        ```jsx
        { x: [1,2,3], y: [2,3,4], z: [4,5] }
        
        ```
        
    - Output:
        
        ```jsx
        [1,2,3,4,5]
        
        ```
        
10. **Pick only given keys from object**
    - Input:
        
        ```jsx
        { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
        
        ```
        
    - Output:
        
        ```jsx
        { name: "Rahul", city: "Noida" }
        
        ```
        
11. **Find student with highest average marks**
    - Input:
        
        ```jsx
        { A: [80, 90], B: [70, 75, 85] }
        
        ```
        
    - Output:
        
        ```
        A
        
        ```
        
    
12. **Sort object entries by values (ascending)**
    - Input:
        
        ```jsx
        { a: 3, b: 1, c: 2 }
        
        ```
        
    - Output:
        
        ```jsx
        [["b",1], ["c",2], ["a",3]]
        
        ```
        
13. **Count number of keys in object**
    - Input:
        
        ```jsx
        { a: 1, b: 2, c: 3 }
        
        ```
        
    - Output:
        
        ```
        3
        
        ```
        
14. **Capitalize string values inside object**
    - Input:
        
        ```jsx
        { name: "alice", city: "delhi" }
        
        ```
        
    - Output:
        
        ```jsx
        { name: "Alice", city: "Delhi" }
        
        ```
        
15. **Convert object to query string**
    - Input:
        
        ```jsx
        { name: "Alice", age: 25 }
        
        ```
        
    - Output:
        
        ```
        "name=Alice&age=25"
        
        ```
        
16. **Count even and odd numbers in array**
    - Input:
        
        ```jsx
        [1,2,3,4,5,6]
        
        ```
        
    - Output:
        
        ```jsx
        { even: 3, odd: 3 }
        
        ```
        
17. **Find common keys between two objects**
    - Input:
        
        ```jsx
        { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
        
        ```
        
    - Output:
        
        ```jsx
        ["b","c"]
        
        ```
        
18. **Convert array of objects to lookup by id**
    - Input:
        
        ```jsx
        [{ id: 1, name: "A" }, { id: 2, name: "B" }]
        
        ```
        
    - Output:
        
        ```jsx
        { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
        
        ```
        
19. **Check if all values in object are numbers**
    - Input:
        
        ```jsx
        { a: 1, b: "hello", c: 3 }
        
        ```
        
    - Output:
        
        ```
        false
        
        ```
        

---

# 🔹 20 intermediate (Objects + Arrays)

1. **Sum all transactions per user**
    - Input:
        
        ```jsx
        [
          { user: "A", amount: 100 },
          { user: "B", amount: 200 },
          { user: "A", amount: 50 }
        ]
        ```
        
    - Output:
        
        ```jsx
        { A: 150, B: 200 }
        ```
        
2. **Transform API response to object (id → name)**
    - Input:
        
        ```jsx
        [
          { id: 1, name: "Alice" },
          { id: 2, name: "Bob" }
        ]
        ```
        
    - Output:
        
        ```jsx
        { 1: "Alice", 2: "Bob" }
        ```
        
3. **Remove falsy values from object**
    - Input:
        
        ```jsx
        { a: 0, b: null, c: "hello", d: undefined, e: 5 }
        
        ```
        
    - Output:
        
        ```jsx
        { c: "hello", e: 5 }
        
        ```
        
4. Check for permissions from roles
    - Input:
        
        ```jsx
        roles={ admin:["read","write"], user:["read"], staff: ["write"]}
        checkRole="user",
        action="write"
        ```
        
    - Output:
        
        ```jsx
        false
        ```
        
5. **Transform array of orders into revenue per category**
    - Input:
        
        ```jsx
        [
          { id: 1, category: "electronics", price: 100 },
          { id: 2, category: "clothes", price: 50 },
          { id: 3, category: "electronics", price: 200 }
        ]
        
        ```
        
    - Output:
        
        ```jsx
        { electronics: 300, clothes: 50 }
        
        ```
        
6. **Remove duplicate objects by id**
    - Input:
        
        ```jsx
        [
          { id: 1, name: "A" },
          { id: 2, name: "B" },
          { id: 1, name: "A" }
        ]
        
        ```
        
    - Output:
        
        ```jsx
        [
          { id: 1, name: "A" },
          { id: 2, name: "B" }
        ]
        
        ```
        
7. **Chunk object entries into groups of size**
    - Input:
        
        ```jsx
        { a: 1, b: 2, c: 3, d: 4 }, size=2
        ```
        
    - Output:
        
        ```jsx
        [ [["a",1],["b",2]], [["c",3],["d",4]] ]
        ```
        
        1. **Find longest string among object values**
            - Input:
                
                ```jsx
                { a: "apple", b: "banana", c: "kiwi" }
                
                ```
                
            - Output:
                
                ```
                banana
                
                ```
                
8. Convert the object where **languages** are the top-level keys, and inside each are **translation strings by key into** an object where **translation keys** are the top-level keys, and inside each you store values per language [HARD**]
    - Input:
        
        ```jsx
        {
          en: { hello: "Hello", bye: "Goodbye" },
          fr: { hello: "Bonjour", bye: "Au revoir" },
          es: { hello: "Hola" }
        }
        ```
        
    - Output:
        
        ```jsx
        {
          hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
          bye: { en: "Goodbye", fr: "Au revoir" }
        }
        ```
        
9. **Build index of ids grouped by category**
    - Input:
        
        ```jsx
        [
          { id: 1, category: "fruit" },
          { id: 2, category: "veggie" },
          { id: 3, category: "fruit" }
        ]
        
        ```
        
    - Output:
        
        ```jsx
        { fruit: [1,3], veggie: [2] }
        
        ```
        
10. **Remove deeply nested key from object**
    - Input:
        
        ```jsx
        { a: { b: { c: 1, d: 2 } } }, remove "c"
        
        ```
        
    - Output:
        
        ```jsx
        { a: { b: { d: 2 } } }
        
        ```
        
11. **Check if two objects are deeply equal**
    - Input:
        
        ```jsx
        { a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }
        
        ```
        
    - Output:
        
        ```
        true
        
        ```
        
12. **Deep flatten nested arrays inside object**
    - Input:
        
        ```jsx
        { a: [1, [2, [3]]], b: [4, [5]] }
        
        ```
        
    - Output:
        
        ```jsx
        { a: [1,2,3], b: [4,5] }
        
        ```
        
13. **Find most repeated word across categories**
    - Input:
        
        ```jsx
        { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }
        
        ```
        
    - Output:
        
        ```
        apple
        
        ```
        
14. **Find intersection of all arrays in object**
    - Input:
        
        ```jsx
        { a: [1,2,3], b: [2,3,4], c: [3,4,5] }
        
        ```
        
    - Output:
        
        ```
        [3]
        
        ```
        
15. **Deep merge two nested objects**
    - Input:
        
        ```jsx
        { a: { x: 1, y: 2 } }
        { a: { y: 3, z: 4 } }
        
        ```
        
    - Output:
        
        ```jsx
        { a: { x: 1, y: 3, z: 4 } }
        
        ```
        
16. **Nested object destructuring**
    - Input:
        
        ```jsx
        { user: { profile: { name: "Alice", age: 25 } } }
        
        ```
        
    - Output:
        
        ```
        Alice 25
        
        ```
        
17. **Find top N keys by value**
    - Input:
        
        ```jsx
        { a: 10, b: 50, c: 30, d: 40 }, N=2
        
        ```
        
    - Output:
        
        ```jsx
        ["b","d"]
        
        ```
        
18. **Sort array of objects by name then age**
    - Input:
        
        ```jsx
        [
          { name: "Alice", age: 30 },
          { name: "Bob", age: 25 },
          { name: "Alice", age: 22 }
        ]
        
        ```
        
    - Output:
        
        ```jsx
        [
          { name: "Alice", age: 22 },
          { name: "Alice", age: 30 },
          { name: "Bob", age: 25 }
        ]
        
        ```
        
19. Reconcile two lists (missing + extra items)
    - Input:
        
        ```jsx
        expected:["a","b","c"]
        actual:["b","c","d"]
        ```
        
    - Output:
        
        ```
        { missing:["a"], extra:["d"] }
        ```
        
20. **Merge two objects (no sum, override second)**
    - Input:
        
        ```jsx
        { a: 10, b: 20 }
        { a: 5, c: 15 }
        
        ```
        
    - Output:
        
        ```jsx
        { a: 5, b: 20, c: 15 }
        
        ```