
const express = require("express");
const bodyParser = require("body-parser");

// routes
const itemRoutes = require("./routes/items");
const apiRoutes = require("./routes/apidata");

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use("/items", itemRoutes);

app.use("/apidata", apiRoutes);



app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});


