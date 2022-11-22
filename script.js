let myLibrary = [];

const submitBook = document.querySelector('#submit');

submitBook.addEventListener('click', addBook);

function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addBook(e) {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const genre = document.querySelector('#genre').value;
    const pages = document.querySelector('#length').value;
    const read = document.querySelector('#read').checked;

    const newBook = new Book(title, author, genre, pages, read);

    myLibrary.push(newBook);
    console.log(myLibrary);
    document.querySelector('form').reset();
}

function toBookshelf() {
    const shelf = document.querySelector('#bookshelf');
    const displayBook = document.createElement('p');
}