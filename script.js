const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    let nextBook = new Book(title, author, pages, read);
    myLibrary.push(nextBook)
    console.table(myLibrary);
    addToBookcase();
}

function addToBookcase() {
    let bookcase = document.querySelector('.bookcase');
    bookcase.innerHTML='';
    for (let i = 0; i < myLibrary.length; i++) {
        let currentBook = myLibrary[i];
        let createBook = document.createElement('div');
        createBook.innerHTML = `
            <p> ${currentBook.title} </p>
            <br>
            <p> ${currentBook.author} </p>
            <br>
            <p> ${currentBook.pages} pages</p>
            <br>
            <p> ${currentBook.read ? 'Read' : 'Not Read'}</p>
            <br>
            <p> <button class = 'deletebook' onclick='removeBook(${i})'> Delete </button> </p>`;
        bookcase.appendChild(createBook);
    }
}

let newBook = document.querySelector('.addBook');
newBook.addEventListener('click', () => {
    let bookForm = document.querySelector('.bookFormDia');
    bookForm.showModal();
})

let submit = document.querySelector('#submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    let bookForm = document.querySelector('.bookFormDia');
    bookForm.close();
})

function removeBook(index) {
    myLibrary.splice(index, 1);
    addToBookcase();
}