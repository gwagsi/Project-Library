let myLibrary = [];
//let books = document.getElementById(books);

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
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  addBookToLibrary(title, author, pages);
}

function displayBooks() {
  const table = document.getElementById("table");
  const tableHeading = table.firstElementChild;
  table.innerHTML = "";
  table.appendChild(tableHeading);
  myLibrary.forEach((book) => {
    let tr = document.createElement("tr");
    for (const key in book) {
      console.log("we are here2");
      let th = document.createElement("th");
      console.log(`${key}: ${book[key]}`);
      th.innerText = book[key];
      console.log(th);
      tr.appendChild(th);
      console.log(tr);
    }
    console.log(table);
    table.appendChild(tr);
  });
}
