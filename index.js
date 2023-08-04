// function fetchBooks() {
//   const fetchedData = fetch("https://anapioficeandfire.com/api/books");
//   const responseData = fetchedData.then(response => response.json());
//   responseData.then ((books) => {return renderBooks(books)})
// }

//In class:
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())  ///The right side of the arrow function is
                                               ///known as an implicit return: does not have 
                                               ///curly braces and does not need return keyword.
                                               ///Or can do a normal function with curly brackets 
                                               ///and the return keyword: {return response.json()}
  .then(books => {
    renderBooks(books);
    // console.log(books)
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});



/*
//Short Lecture on impicit returns from Arrow Functions:
const printNumeber = number => console.log(number)

printNumeber(3);
console.log("Hello");
console.log(console.log("Hello"));

*****Main TAKEAWAY:*****
//implicit return: (it's called implicit because we are NOT writing the return keyword):
const sum = (num1, num2) => num1 + num2;

//explicit return: (called a return function because we ARE writing the return keyword):
const sum = (num1, num2) => {
  return num1 + num2;
}

console.log(sum(2, 6));

///Most common errors:
const sum = function(num1, num2) => num1 +num2 ///this won't work because the arrow function
                                               ///is a special form of function that can take
                                               ///in implicit returns and does not need 
                                               ///function keywords.

*/
