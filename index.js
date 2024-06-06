class Book {
    constructor(title, author, isbn, availableCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.availableCopies = availableCopies;
    }

    borrowBook() {
        if (this.availableCopies > 0) {
            this.availableCopies--;
            return true;
        }
        return false;
    }

    returnBook() {
        this.availableCopies++;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
    }

    findBookByTitle(title) {
        return this.books.find(book => book.title === title);
    }

    listAllBooks() {
        this.books.forEach(book => {
            console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Available Copies: ${book.availableCopies}`);
        });
    }
}

// Example usage:
const library = new Library('Central Library');

const book1 = new Book('1984', 'George Orwell', '1234567890', 5);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', '0987654321', 3);
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1122334455', 2);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log('Listing all books:');
library.listAllBooks();

console.log('\nBorrowing a book (1984):');
console.log(book1.borrowBook()); // true
console.log(book1.borrowBook()); // true

console.log('\nReturning a book (1984):');
book1.returnBook();

console.log('\nFinding a book by title (The Great Gatsby):');
console.log(library.findBookByTitle('The Great Gatsby'));

console.log('\nRemoving a book (To Kill a Mockingbird):');
library.removeBook('0987654321');

console.log('\nListing all books after removal:');
library.listAllBooks();
