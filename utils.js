export function sayHello(name) {
    

    console.log("Hello, World!");
    let firstName = "Alice";
    let location = "Wonderland";
    console.log(`My name is ${firstName} and I live in ${location}.`);
    
    return `Hello, ${name}!`;
  }


export function arrowadd() {
    

        // Arrow function to add two numbers
    const addNumbers = (n1, n2) => n1 + n2;

    // Call addNumbers()
    let result = addNumbers(2, 5);
    console.log(result);    // Output: 7
  }

export function basicloop() {
// Using a while loop to print numbers from 1 to 5
    console.log("Numbers from 1 to 5:");
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;    // Increment the counter
    }
    console.log("End of while loop.");
    console.log("Numbers from 1 to 5:");    // Output: Numbers from 1 to 5:
    // Using a for loop to print numbers from 1 to 5
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}


export function arraymethods() {
    // Create an array of fruits
    let fruits = ["Apple", "Banana", "Orange"];

    // Add element to the end
    fruits.push("Grapes");

    console.log(fruits);
    // Remove element from end
    console.log("pop out "+fruits.pop());
    console.log(fruits);


    const colors = ["Red", "Green", "Blue"];

    colors.pop();
    colors.pop();

    console.log(colors);    // Output: ["Red"]
}

export function objectprint() {
    const book = {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 295,
        year: 1937,
        // Add a method
        displayInfo: function () {
            console.log("This book is a classic!");
        }
    };
    
    // Loop through the object
    for (let key in book) {
        console.log(`${key}: ${book[key]}`);
    }
    // Object with properties
    const person = {
        name: "Alice",
        age: 30,
        city: "London"
    };
    // Loop through the keys of the object
    for (let items in person) {

        // Display associated value
        console.log(person[items])
    }

        // Users data objects
    console.log ("Users data objects");
    const users = {
        user1: "Alice",
        user2: "Bob",
        user3: "Charlie"
    };

    // Retrieve all the keys
    let usersList = Object.keys(users);

    // Display keys length
    console.log(usersList.length);
    console.log(Object.values(users));    // Output: ["Alice", "Bob", "Charlie"]
    // Retrieve and display key-value pairs
    console.log(Object.entries(users)); // Output: [["user1", "Alice"], ["user2", "Bob"], ["user3", "Charlie"]]
    
    // Add new property
    book.genre = "Fantasy";
    book.pages = 310;
    console.log(book.genre); // Output: Fantasy
    console.log(Object.entries(book));
    book.displayInfo();   

}


export function stringexample() {
    let firstName = "Emma";
    let event = "weekly team meeting";
    let time = "Thursday at 10 AM";

    let message = `Hi ${firstName}, you are invited to our ${event} on ${time}.`;

    console.log(message);    // Output: Hi Emma, you are invited to our weekly team meeting on Thursday at 10 AM.
    // String interpolation
    let name = "Alice";
    let greeting = `Hello, ${name}!`;
    console.log(greeting);    // Output: Hello, Alice!
    // String length
    let str = "Hello, World!"; 
    // more string example
    console.log(str.length);    // Output: 13
    // String concatenation
    let str1 = "Hello";
    let str2 = "World!";                        
    let concatenated = str1 + " " + str2;
    console.log(concatenated);    // Output: Hello World!
    // String slicing
    let sliced = str.slice(0, 5);
    console.log(sliced);    // Output: Hello
    // String replacement
    let replaced = str.replace("World", "Universe");
    console.log(replaced);    // Output: Hello, Universe!
    // String to number conversion
    let numStr = "123";
    let num = Number(numStr);
    console.log(num);    // Output: 123
    // String to boolean conversion
    let boolStr = "true";
    let bool = (boolStr === "true");
    console.log(bool);    // Output: true
    // String to array conversion
    let strArray = "apple,banana,cherry";
    let array = strArray.split(",");
    console.log(array);    // Output: ["apple", "banana", "cherry"]
    // String to object conversion
    let objStr = '{"name": "Alice", "age": 30}';
    let obj = JSON.parse(objStr);
    console.log(obj);    // Output: { name: 'Alice', age: 30 }
    // Object to string conversion
    let obj2 = { name: "Alice", age: 30 };
    let objStr2 = JSON.stringify(obj);
    console.log(objStr);    // Output: '{"name":"Alice","age":30}'
    // String to date conversion
    let dateStr2 = "2023-10-01";
    let date2 = new Date(dateStr2);       
    console.log(date2);    // Output: Sun Oct 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
    // Date to string conversion
    let date = new Date();
    let dateStr = date.toISOString();
    console.log(dateStr);    // Output: 2023-10-01T00:00:00.000Z

    let word = "Hello";

    for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    }
    let sentence = "   Let's learn JavaScript!   ";

    let trimmedSentence = sentence.trim()
    console.log(trimmedSentence);
    // Output: Let's learn JavaScript!

    console.log(trimmedSentence.slice(0, 5));
    // Output: Let's

    console.log(trimmedSentence.concat(" Enjoy!"));
    // Output: Let's learn JavaScript! Enjoy!

    console.log(trimmedSentence.toUpperCase());
    // Output: LET'S LEARN JAVASCRIPT!

    console.log(trimmedSentence.toLowerCase());
    // Output: let's learn javascript!

    console.log(trimmedSentence.replace("javascript", "programming"));
    // Output: let's learn programming.

    console.log(trimmedSentence.split(" "));
    // Output: [ "Let's", 'learn', 'JavaScript!' ]

}

export function errorhandling() {
    // Error handling using try-catch
    try {
        let result = 10 / 0;
        if (result === Infinity) {
            throw new Error("Division by zero is not allowed.");
        }
    } catch (error) {
        console.log(error.message);    // Output: Division by zero is not allowed.
    }

    try {
        console.log("Try block executed");
    } catch (error) {
        console.log("Catch block executed");
    } finally {
        console.log("Finally block executed");
    }


    try {
        let num = -5;
        if (num < 0) {
            throw new Error("Negative numbers not allowed");//throw will jump to catch block
        }
        // if not string
        if (typeof num !== "string") {
            throw new Error("Not a string");
        }
    } catch (error) {
        console.log(`Error caught: ${error.message}`);// Output: Error caught: Negative numbers not allowed
    }

    //catch all errors
    try {
        let num = -5;
        let errors = [];
    
        if (num < 0) {
            errors.push("Negative numbers not allowed");
        }
        if (typeof num !== "string") {
            errors.push("Not a string");
        }
        if (typeof num !== "array") {
            errors.push("Not an array");
        }
        if (num !== "dot") {
            errors.push("Not Polkadot");
        }
    
        if (errors.length > 0) {
            throw new Error(errors.join("; "));
        }
    } catch (error) {
        console.log(`Error caught: ${error.message}`);
    }
    
}
export function spreadoperator() {  
    // Spread operator example
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    // Merging arrays
    const mergedArray = [...arr1, ...arr2];
    console.log(mergedArray);    // Output: [1, 2, 3, 4, 5, 6]

    // Copying an array
    const copiedArray = [...arr1];
    console.log(copiedArray);    // Output: [1, 2, 3]
    // more spread operator example
    const person = {
        name: "Alice",
        age: 30
    };
    const address = {
        city: "New York",
        country: "USA"
    };
    // Merging objects
    const mergedObject = { ...person, ...address };
    console.log(mergedObject);    // Output: { name: 'Alice', age: 30, city: 'New York', country: 'USA' }
    // Copying an object
    const copiedObject = { ...person };
    console.log(copiedObject);    // Output: { name: 'Alice', age: 30 }
    // Function with spread operator
    function displayInfo(name, age, city) {
        console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
    }
    const info = ["Alice", 30, "New York"];
    // Using spread operator to pass array as arguments
    displayInfo(...info);    // Output: Name: Alice, Age: 30, City: New York
    // Using spread operator with Math functions    
    const numbers = [1, 2, 3, 4, 5];
    const maxNumber = Math.max(...numbers);
    console.log(maxNumber);    // Output: 5
    // Using spread operator with string
    const str = "Hello";
    const chars = [...str];
    console.log(chars);    // Output: ['H', 'e', 'l', 'l', 'o']
}


export function restoperator() {
    // Rest operator example
    function sum(...numbers) {
        let total = 0;
        for (let number of numbers) {
            total += number;
        }
        return total;
    }

    console.log(sum(1, 2, 3, 4, 5));    // Output: 15
}

export function destructuring() {   
    // Destructuring assignment example
    const person = {
        name: "Alice",
        age: 30,
        city: "New York"
    };

    // Destructuring properties
    const { name, age } = person;
    console.log(name);    // Output: Alice
    console.log(age);     // Output: 30

    // Destructuring array
    const numbers = [1, 2, 3];
    const [first, second] = numbers;
    console.log(first);   // Output: 1
    console.log(second);  // Output: 2

}

//List Prime Number from 0 to var
// Initialize a variable to store the maximum number
// let maxNumber = 10;
// Function to check if a number is prime
export function listPrime(num) {
    const primes = [];
    if (num < 2) {
        console.log("No prime numbers found.");
        console.log("smallest prime number is 2");
        return;
    }
    for (let i = 2; i <= num; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break; // No need to continue checking
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        // space-separated
        // join all prime numbers print in a line
        // console.log(i);
        // console.log(`${i} is a prime number.`);
    }
    console.log(primes.join(" "));
}

// export function listPrime(num) {
//     // Function to check if a number is prime
//     for (let i = 0; i <= num; i++) { 
//         let p = true;
//         if (i <= 1) p=false; // Skip numbers less than or equal to 1
//         for (let j = 2; j < i; j++) {
//             if (num % j === 0) {p=false;} // Skip non-prime numbers
//         }
//         if (p) {console.log(i);}
//         // Print prime numbers
//          // Print prime numbers
//         // Check if the number is prime
//         // if (isPrime(i)) {
//         //     console.log(i);
//         //     // console.log(`${i} is a prime number.`);
//         // }
//         // } else {
//         //     console.log(`${i} is not a prime number.`);
//         // }
//     }
// }


// Initialize total to 0
// let total = 0;

// while (true) {
//     // Get input from the user
//     let number = Number(prompt("Enter a number(enter 0 to stop): "));

//     // If the number is 0, terminate the loop
//     if (number === 0) {
//         break;
//     }

//     // If the number is even, skip it
//     if (number % 2 === 0) {
//         continue;
//     }

//     // Add odd numbers to the total
//     total += number;
// }

// console.log(`Total sum of odd numbers: ${total}`);    // Output: Total sum of odd numbers: 9


// import { arrowadd } from './utils.js';
// arrowadd();



// import { sayHello } from './utils.js';
// console.log(sayHello('Alice'));

