const path = require("path");
const cors = require("cors");
const logger = require("morgan");
const express = require("express");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const productsRoutes = require("./routes/products");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

const baseUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : process.env.BASE_URL;

app.get("/", (req, res) => {
  res.json({
    message: "Hello there welcome to my products api find the routes below.",
    routes: {
      "get-products": `${baseUrl}/api/v1/products`,
      "get-single-product": `${baseUrl}/api/v1/products`,
      "add-product": `/api/v1/products`,
      "update-product": `/api/v1/products/:id`,
      "delete-product": `/api/v1/products/:id`,
    },
  });
});

app.use("/api/v1/products", productsRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err.stack : {},
  });
});

module.exports = app;
