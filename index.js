let myLibrary = [];
//let books = document.getElementById(books);

function Book(index, title, author, pages, status) {
  // the constructor...
  this.index = index;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary(index, title, author, pages, status) {
  // do stuff here
  const newBook = new Book(index, title, author, pages, status);
  myLibrary.push(newBook);
}

function getValue() {
  console.log(myLibrary);
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const index = myLibrary.length;
  const status = document.getElementById("status").value;
  addBookToLibrary(index, title, author, pages, status);
}

function displayBooks() {
  const table = document.getElementById("table");
  const tableHeading = table.firstElementChild;
  table.innerHTML = "";
  table.appendChild(tableHeading);
  myLibrary.forEach((book) => {
    let tr = document.createElement("tr");
    for (const key in book) {
      if (key != "index" && key != "status") {
        let th = document.createElement("th");
        th.innerText = book[key];
        tr.appendChild(th);
      }
    }
    const deleteButton = document.createElement("button");
    const readButton = document.createElement("button");
    const readStatusDisplay = document.createElement("div");
    readStatusDisplay.setAttribute("id", "readStatusDisplay");
    let read;
    if (book.status == 1) {
      read = "Read";
    } else {
      read = "Unread";
    }
    readStatusDisplay.innerText = read;
    const buttonId = book.index;
    deleteButton.setAttribute("id", buttonId);
    readButton.setAttribute("id", buttonId);
    deleteButton.innerText = "Delete";
    readButton.innerText = read;
    deleteButton.addEventListener("click", deleteBook);
    readButton.addEventListener("click", readStatus);
    readStatusDisplay.appendChild(readButton);
    tr.appendChild(readStatusDisplay);
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

readStatus = (e) => {
  console.log(myLibrary);
  target = e.target.id;
  objIndex = myLibrary.findIndex((obj) => obj.index == target);
  console.log(objIndex);
  if (myLibrary[objIndex].status === 1) {
    myLibrary[objIndex].status = 0;
  } else {
    myLibrary[objIndex].status = 1;
  }
  console.log(myLibrary);
  displayBooks();
};

function readValue() {
  let read;
  if ((book.status = 1)) {
    read = "Read";
  } else if ((book.status = 0)) {
    read = "Unread";
  }
}
