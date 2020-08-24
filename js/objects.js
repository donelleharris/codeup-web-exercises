(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
    firstName: "Donelle",
    lastName: "Harris",
    sayHello: function (){
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    }
    };
    console.log(person.sayHello());
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function (shopper){
        if (shopper.amount > 200) {
            console.log(shopper.name + " you are eligible for 12% Discount! Your total before discount is: $" + shopper.amount + " Your total after discount is: $" + (shopper.amount * .88));
        } else {
            console.log(shopper.name + " you are ineligible for a discount.");
            console.log("Your total must be $250.00 or higher to receive a discount. Your total is: $" + shopper.amount + ".");
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {
            title: "Harry Potter and the Sorcerer's Stone",
            author: {firstName: "J.K.", lastName: "Rowling"},
        },
        {
            title: "The Lightning Thief",
            author: {firstName: "Rick", lastName: "Riordan"},
        },
        {
            title: "Harry Potter and the Chamber of Secrets",
            author: {firstName: "J.K.", lastName: "Rowling"},
        },
        {
            title: "Harry Potter and the Prisoner of Azkaban",
            author: {firstName: "J.K.", lastName: "Rowling"},
        },
        {
            title: "Harry Potter and the Goblet of Fire",
            author: {firstName: "J.K.", lastName: "Rowling"},
        },
        {
            title: "Harry Potter and the Half-Blood Prince",
            author: {firstName: "J.K.", lastName: "Rowling"},
        },
        {
            title: "Harry Potter and the Deathly Hallows",
            author: {firstName: "J.K.", lastName: "Rowling"},
        },
        {
            title: "The Sea of Monsters",
            author: {firstName: "Rick", lastName: "Riordan"},
        },
        {
            title: "The Titan's Curse",
            author: {firstName: "Rick", lastName: "Riordan"},
        },
        {
            title: "The Battle of the Labyrinth",
            author: {firstName: "Rick", lastName: "Riordan"},
        },
        {
            title: "The Last Olympian",
            author: {firstName: "Rick", lastName: "Riordan"},
        },
    ]

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
var createBook = function (title, firstName, lastName){
    var book = {};
        title = prompt("Book title: ")
        firstName = prompt("Author first name: ")
        lastName = prompt("Author last name:")
        book.title = title;
        book.author = {
            firstName: firstName,
            lastName: lastName,
        };
        return book;
    }
books.push(createBook());

var showBookInfo = function (book, bookNumber){
    console.log("Book #" + bookNumber);
    console.log("Title: " + book.title);
    console.log("Author: " + book.author.firstName + " " + book.author.lastName);
    console.log('---');
}
for (let i = 0; i < books.length; i++){
    console.log("Book #" + (i + 1));
    console.log("Title: " + books[i].title);
    console.log("Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    console.log('---');
}
//
// console.log(books)
// function showBookInfo(book){
//     var outPut = "";
//     outPut += "Title: " + books.title; + "\n" + "Author: " + books.author.firstName + " " + books.author.lastName;
//     return outPut;
// }
//
//     console.log(showBookInfo(books[0]));
})();