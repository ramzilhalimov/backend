const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const corsOption = require("./middlewares/cors");

dotenv.config();

const { PORT = 3005, API_URL = "http://127.0.0.1" } = process.env;

try {
  mongoose.connect("mongodb://127.0.0.1:27017/backend");
} catch (error) {
  handleError(error);
}

const index = express();
let corsOptions = {
  origin: [API_URL],
};

index.use(cors(corsOptions));
index.use(corsOption);
index.use(bodyParser.json());
index.use(bookRouter);
index.use(userRouter);

index.listen(PORT, function () {
  console.log(`CORS-enabled, Сервер запущен по адресу : ${API_URL}:${PORT} `);
});
