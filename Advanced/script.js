var newBooks = JSON.parse(books);

console.table(newBooks);

function createList() {
  for (i = 0; i < newBooks.length; i++) {
    document.getElementById("bookshelf").innerHTML +=
      "<p>" + newBooks[i].title + "<br>" + newBooks[i].author;
  }
}

createList();
