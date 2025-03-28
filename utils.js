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
        year: 1937
    };
    
    // Loop through the object
    for (let key in book) {
        console.log(`${key}: ${book[key]}`);
    }
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

