const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

let books = [
    { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 }
];
let nextId = 4;

// Read all
app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
    const id = Number(req.params.bookId);
    const book = books.find(b => b.id === id);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
});

// Create a new book
app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || !publishedYear) {
        return res.status(400).json({ error: 'Title, author, and publishedYear are required' });
    }
    const newBook = { id: nextId++, title, author, publishedYear };
    books.push(newBook);
    res.status(201).json(newBook);
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Book API server is running on port ${PORT}`);
});