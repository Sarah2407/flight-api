const express = require("express");
// const { json } = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/flightRoute");

const app = express();

app.use(bodyParser.json());

app.use("/", routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});
