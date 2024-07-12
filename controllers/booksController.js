const Book = require('../models/Book');

// Create
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.redirect('/books');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Read - Index
exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.render('books/index', { books:books });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Read - Show
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.render('books/show', { book });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Read - Edit
exports.editBook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.render('books/edit', { book });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  // Read - new
exports.newBook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.render('books/new', { book });
    } catch (error) {
      res.status(400).send(error.message);
    }
  };
  

// Update
exports.updateBook = async (req, res) => {
    if (req.body.read === "on") {
        req.body.read = true
    }
    else {req.body.read = false}
    if (req.body.liked === "on") {
        req.body.liked = true
    }
    else {req.body.liked = false}
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/books/${req.params.id}`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Delete
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/books');
  } catch (error) {
    res.status(400).send(error.message);
  }
};
