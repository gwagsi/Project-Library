let myLibrary = [];
//let books = document.getElementById(books);

function Book(index, title, author, pages) {
  // the constructor...
  this.index = index;
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(index, title, author, pages) {
  // do stuff here
  const newBook = new Book(index, title, author, pages);
  myLibrary.push(newBook);
}

function getValue() {
  console.log(myLibrary);
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const index = myLibrary.length;
  addBookToLibrary(index, title, author, pages);
}

function displayBooks() {
  const table = document.getElementById("table");
  const tableHeading = table.firstElementChild;
  table.innerHTML = "";
  table.appendChild(tableHeading);
  myLibrary.forEach((book) => {
    let tr = document.createElement("tr");
    for (const key in book) {
      if (key != "index") {
        let th = document.createElement("th");
        th.innerText = book[key];
        tr.appendChild(th);
      }
    }
    const deleteButton = document.createElement("button");
    const buttonId = book.index;
    deleteButton.setAttribute("id", buttonId);
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", deleteBook);
    tr.appendChild(deleteButton);
    table.appendChild(tr);
  });
}
deleteBook = (e) => {
  console.log(e.target.id);
  target = e.target.id;
  console.log(myLibrary);
  myLibrary.splice(target, 1);
  console.log(myLibrary);
  displayBooks();
};
