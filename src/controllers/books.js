const Book = require("../models/book");

// Получаем список книг
const getBooks = (req, res) => {
  return Book.find({})
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Получим книгу по ID
const getBook = (req, res) => {
  const { book_id } = req.params;
  return Book.findById(book_id)
    .then((book) => {
      if (!book) {
        response.status(404).send("Book not found");
      } else {
        res.status(200).send(book);
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Добавляем книгу
const createBook = (req, res) => {
  return Book.create({ ...req.body })
    .then((book) => {
      res.status(201).send(book);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Обновляем список книг
const updateBook = (req, res) => {
  const { book_id } = req.params;
  Book.findByIdAndUpdate(book_id, { ...req.body })
    .then((book) => {
      if (!book) {
        response.status(404).send("Book not found");
      } else {
        res.status(200).send(book);
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

// Удаляем книгу
const deleteBook = (req, res) => {
  const { book_id } = req.params;
  return Book.findByIdAndDelete(book_id)
    .then((book) => {
      if (!book) {
        response.status(404).send("Book not found");
      } else {
        res.status(200).send("Ready");
      }
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
