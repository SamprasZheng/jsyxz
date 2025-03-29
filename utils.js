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

export function string() {
    let firstName = "Emma";
    let event = "weekly team meeting";
    let time = "Thursday at 10 AM";

    let message = "Hi " + firstName + ", you are invited to our " + event + " on " + time + ".";

    console.log(message);


    let word = "Hello";

    console.log(word[0]);    // Output: H

    console.log(word[10]);    // Output: undefined
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





}

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

