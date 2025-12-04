const books = [
  {
    bookName: "JavaScript Guide",
    author: "John Doe",
    pages: 350,
    price: 499,
    rating: 4.3,
    category: "Programming",
    publishedYear: 2019,
  },
  {
    bookName: "React Mastery",
    author: "Siddharth Sharma",
    pages: 280,
    price: 599,
    rating: 4.8,
    category: "Programming",
    publishedYear: 2023,
  },
  {
    bookName: "History of India",
    author: "R. Sharma",
    pages: 420,
    price: 399,
    rating: 4.1,
    category: "History",
    publishedYear: 2015,
  },
  {
    bookName: "CSS Basics",
    author: "Meena Gupta",
    pages: 180,
    price: 199,
    rating: 3.9,
    category: "Design",
    publishedYear: 2020,
  },
  {
    bookName: "Node.js Deep Dive",
    author: "Alex Ron",
    pages: 510,
    price: 699,
    rating: 4.7,
    category: "Programming",
    publishedYear: 2021,
  },
];

// 1. Get all books name with rating greater than 4.5
const highRatingBooks = books
  .filter(book => book.rating > 4.5)
  .map(book => book.bookName);
console.log("All books with rating greater than 4.5: ")
console.log(highRatingBooks);

// 2. Get the names of all books published after 2020
const latestBooks = books
  .filter(book => book.publishedYear > 2020)
  .map(book => book.bookName);
console.log("Books published after 2020: ")
console.log(latestBooks);

// 3. Calculate the total price of all Programming books
const totalProgramming = books
  .filter(book => book.category === "Programming")
  .reduce((sum, book) => sum+book.price,0);
console.log("Total price of Programming books: ")
console.log(totalProgramming);

// 4. Find the average number of pages of all books in the Design category
const designAvg = books.filter(book => book.category === "Design");
const averagePages =
  designAvg.reduce((sum, book) => sum + book.pages, 0) /
  designAvg.length;
console.log("Average pages in Design category: ");
console.log(averagePages);

// 5. Get a list of authors who have written books with a rating less than 4.0
const lowRatingAuthors = books
  .filter(book => book.rating < 4.0)
  .map(book => book.author);
console.log("Authors with rating less than 4: ")
console.log(lowRatingAuthors);

// 6. Find the most expensive book in the collection
const mostExpensive = books.reduce((maxBook, currentBook) => {
  return currentBook.price > maxBook.price ? currentBook : maxBook;
});
console.log("Most expensive book: ");
console.log(mostExpensive.bookName);

// 7. Get all books that have more than 300 pages and are priced below 500
const cheapBooks = books
  .filter(book => book.pages > 300 && book.price<500)
  .map(book => book.bookName);
console.log("Books with more than 300 pages and less than 500 Rs: ");
console.log(cheapBooks);

// 8. Create a new array with book names and their respective authors
const booksAuthors = books.map(book => ({
  bookName: book.bookName,
  author: book.author
}));
console.log("New array with book and author names: ");
console.log(booksAuthors);
