const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

router.get('/', booksController.getBooks);
router.get('/new', booksController.newBook);
router.post('/', booksController.createBook);
router.get('/:id', booksController.getBook);
router.get('/:id/edit', booksController.editBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;
