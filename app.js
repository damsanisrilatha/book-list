//Book class:represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//ui class:handle ui tasks
class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach(book => UI.addBookToList(book));
  }
  static addBookToList(book) {
    //console.log(book);
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class="btn btn-danger btn-sm delete">
      X</a></td>`;
    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    // vanish 3 seconds
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}
//store class:handles storage
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
  static removeBook(isbn) {
    const books = store.getBooks();
    //arrow fun this is pipeline we are passing (book and index)
    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}
//event :display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//event binding- binding submit event
document.querySelector('#book-form').addEventListener('submit', e => {
  //prevent actual submit
  e.preventDefault();

  //get form values(title id,author id,isbn id)
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  //validation
  if (title === '' || author === '' || isbn === '') {
    UI.showAlert('please fill all fields', 'danger');
  } else {
    //console.log(title, author, isbn);
    //inststiate
    const book = new Book(title, author, isbn);

    //console.log(book);
    UI.addBookToList(book);

    //ADD BOOK TO STORE
    Store.addBook(book);

    //show success messsage(add books)
    UI.showAlert('Book Added', 'success');

    //clear fields
    UI.clearFields();
  }
});
//event:remove a book
document.querySelector('#book-list').addEventListener('click', e => {
  UI.deleteBook(e.target);
  //remove book from ui
  Store.removeBook(e.target.parentElementSibling.textContent);
  //show remove
  UI.showAlert('Book removed', 'success');
});
