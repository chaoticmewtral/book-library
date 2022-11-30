let myLibrary = [];

const button = document.querySelector("#new-book");
const submitBook = document.querySelector('#submit');
const closeButton = document.querySelector('.close');

button.addEventListener('click', showForm);
submitBook.addEventListener('click', addBook);
window.onload = toBookshelf();
closeButton.addEventListener('click', closeForm);

function showForm() {
    const form = document.querySelector('form');

    form.style.visibility = 'visible';
}

function closeForm() {
    const form = document.querySelector('form');

    form.style.visibility = 'hidden';
}

function Book(title, author, genre, pages, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
}

const theGiver = new Book('The Giver', 'Lois Lowry', 'sci-fi', 180, true);

myLibrary.push(theGiver);

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
    document.querySelector('#title').focus();
    toBookshelf();
}

function toBookshelf() {
    const shelf = document.querySelector('#bookshelf');
    const bookDisplay = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    for (let book of myLibrary) {
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;

        bookDisplay.appendChild(title);
        bookDisplay.appendChild(author);
        bookDisplay.appendChild(pages);

        if (book.read) {
            bookDisplay.className = "has-read book";
        } else {
            bookDisplay.className = "not-read book";
        }
        shelf.appendChild(bookDisplay);
    }
}