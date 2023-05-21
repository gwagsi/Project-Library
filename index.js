let myLibrary = [2];
let books = document.getElementById(books);

function Book(title, author, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  // do stuff here
  const newBook = new Book(title, author, pages);
  myLibrary.push(newBook);
}

function getValue() {
  console.log(myLibrary);
  console.log("Hello");
  title = document.getElementById("title").value;
  console.log(title);
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  addBookToLibrary(title, author, pages);
  console.log(myLibrary[3].title);
}
console.log("here are me");
function displayBooks() {
  console.log("we are here");
  table = document.getElementById("table");
  myLibrary.forEach((book) => {
    let tr = document.createElement(tr);
    for (key in book) {
      let th = document.createElement(th);
      th.innerText = book(key);
      tr.appenChild(th);
    }
    table.appenChild(tr);
  });
}
displayBooks();
