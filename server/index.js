const express = require("express");
const app = express();
const port = process.env.APP_PORT || 5000;
const customerRouter = require("./routes/customerRouter");
const productRouter = require("./routes/productRouter");
const addressRouter = require("./routes/addressRouter");
const cartRouter = require("./routes/cartRouter");
const checkoutRouter = require('./routes/checkoutRouter');
const paymentRouter = require("./routes/paymentRouter");
const cors = require("cors");
const { notFoundHandler, globalErrorHandler } = require("./middleware/globalErrorHandler");

const bodyParser = require("body-parser"); // atau const express = require("express"); jika versi Express 4.16+

// Menggunakan middleware body-parser untuk mengurai body dari permintaan HTTP
app.use(bodyParser.json()); // atau app.use(express.json()) jika versi Express 4.16+

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is up and running");
});
app.use("/api/v1/", customerRouter);
app.use("/api/v1/", productRouter);
app.use("/api/v1/", addressRouter);
app.use("/api/v1/", cartRouter);
app.use('/api/v1', checkoutRouter);
app.use("/api/v1/", paymentRouter);

// Middlewares
app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
