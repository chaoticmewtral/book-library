let myLibrary = [];

const submitBook = document.querySelector('#submit');



function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const genre = document.querySelector('#genre').value;
    const pages = document.querySelector('#length').value;
    const read = document.querySelector('#read').checked;
}