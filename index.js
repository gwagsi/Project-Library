let myLibrary = [];

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.check = function () {
    console.log(title);
  };
}

function addBookToLibrary(title, author, pages) {
  // do stuff here
  const newBook = new Book(title, author, pages);
  Array.push(newBook);
}
