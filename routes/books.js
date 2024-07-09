const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/', booksController.getBooks);
router.get('/new', (req, res) => res.render('books/new'));
router.post('/', booksController.createBook);
router.get('/:id', booksController.getBook);
router.get('/:id/edit', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render('books/edit', { book });
});
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;
