const express = require("express");
const app = express();
const port = process.env.APP_PORT || 5000;
const router = require("./routes");

const bodyParser = require("body-parser"); // atau const express = require("express"); jika versi Express 4.16+

// Menggunakan middleware body-parser untuk mengurai body dari permintaan HTTP
app.use(bodyParser.json()); // atau app.use(express.json()) jika versi Express 4.16+

app.get("/", (req, res) => {
  res.send("Hi there");
});
app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
