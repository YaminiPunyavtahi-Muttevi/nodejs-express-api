const express = require("express"); 
const app = express(); 
app.get("/", (req, res) => { res.send("Express on Vercel"); }); 
const PORT = process.env.PORT || 5000; app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });

const fs = require("fs"); 
let books = new Array();
// Read users.json file 
fs.readFile("books.json", function(err, data) { 
    
    // Check for errors 
    if (err) throw err; 

    // Converting to JSON 
   
    const booksdata = JSON.parse(data); 
     // Print users 
     
 
for(var i in booksdata)
  books.push([i, booksdata[i]]);


}); 



// Create a Book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).send('Missing title or author');
  }

  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).send(newBook);
});

// Get All Books
app.get('/books', (req, res) => {
  res.json(books);
});
// Get a Single Book
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send('Book not found');
  }
  res.json(book);
});

// Update a Book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).send('Book not found');
  }

  const { title, author } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;

  res.send(book);
});

// Delete a Book
app.delete('/books/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).send('Book not found');
  }

  books.splice(bookIndex, 1);
  res.status(204).send();
});

module.exports = app;