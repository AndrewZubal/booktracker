const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user._id });
    res.render('books/index', { books });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.render('books/show', { book });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.newBookForm = (req, res) => {
  res.render('books/new');
};

exports.createBook = async (req, res) => {
  try {
    const book = new Book({ ...req.body, user: req.user._id });
    await book.save();
    res.redirect('/books');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.editBookForm = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.render('books/edit', { book });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateBook = async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/books/${req.params.id}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.redirect('/books');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
