// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]

/* This function should add a book to the list and return the list */
// New parameters should come before bookName

// Add your code below this line
function add(list, bookName) {
  // let bookListCopy = []
  // for (let book of list) {
  //   bookListCopy.push(book)
  // }
  // bookListCopy.push(bookName)
  // return bookListCopy
  return [...list, bookName]

  // Add your code above this line
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove(list, bookName) {
  // let bookListCopy = []

  // for (let book of list) {
  //   bookListCopy.push(book)
  // }

  // let book_index = bookListCopy.indexOf(bookName)
  // if (book_index >= 0) {

  //   bookListCopy.splice(book_index, 1)
  //   return bookListCopy

  //   // Add your code above this line
  // }
    return list.filter(book => book !== bookName)
}

var newBookList = add(bookList, 'A Brief History of Time')
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies')
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies')

// console.log(`bookList: ${bookList}`)
//console.log(`newBookList: ${newBookList}`)
//console.log(`newerBookList: ${newerBookList}`)
console.log(`newestBookList: ${newestBookList}`)
