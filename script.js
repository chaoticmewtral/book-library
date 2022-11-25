let myLibrary = [];

const submitBook = document.querySelector('#submit');

submitBook.addEventListener('click', addBook);
window.onload = toBookshelf();

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
    const book = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    for (let Book of myLibrary) {
        title.textContent = Book.title;
        author.textContent = Book.author;
        pages.textContent = Book.pages;

        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);

        if (Book.read) {
            book.className = "has-read book";
        } else {
            book.className = "not-read book";
        }
        shelf.appendChild(book);
    }
}