const express = require("express");
const app = express();
const port = process.env.APP_PORT || 5000;
const productRouter = require("./routes/productRouter");
const addressRouter = require("./routes/addressRouter");
const cartRouter = require("./routes/cartRouter");
const paymentRouter = require("./routes/paymentRouter");
const cors = require("cors");

const bodyParser = require("body-parser"); // atau const express = require("express"); jika versi Express 4.16+

// Menggunakan middleware body-parser untuk mengurai body dari permintaan HTTP
app.use(bodyParser.json()); // atau app.use(express.json()) jika versi Express 4.16+

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hi there");
});
app.use("/api/v1/", productRouter);
app.use("/api/v1/", addressRouter);
app.use("/api/v1/", cartRouter);
app.use("/api/v1/", paymentRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
