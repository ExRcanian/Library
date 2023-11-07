//Create array to hold books
const myLibrary = []

//Constructor for books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    //Sets book variables based on input elements from form in HTML
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;

    //Passes variables to Book constructor to create 'nextbook'.
    let nextBook = new Book(title, author, pages, read);

    //Pushes new 'nextBook' into library array
    myLibrary.push(nextBook)

    //Runs function that adds book in array as HTML element
    addToBookcase();
}

function addToBookcase() {
    let bookcase = document.querySelector('.bookcase');

    //Clears html so that adding a book to the existing and adding the array to HTML with existing books  wont duplicate books that were in the array originally
    bookcase.innerHTML='';

    //Loops through every book in library array and creates html elements from currentBook info
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

//Add book button shows the 'dialog' element that is normally hidden which allows for the addition of books
let newBook = document.querySelector('.addBook');
newBook.addEventListener('click', () => {
    let bookForm = document.querySelector('.bookFormDia');
    bookForm.showModal();
})

//Submitting logs the values in the inputs of the form, runs the addBookToLibrary function to create books from these values, and closes the form dialog
let submit = document.querySelector('#submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    let bookForm = document.querySelector('.bookFormDia');
    bookForm.close();
})

//Clickingn the delete button on a specific book (item in the array), deletes that element from the array and re-creates HTMl for bookcase without that element.
function removeBook(index) {
    myLibrary.splice(index, 1);
    addToBookcase();
}