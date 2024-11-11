
const express = require("express");
var cors = require('cors');
const bodyParser = require("body-parser");

// routes
const itemRoutes = require("./routes/items");
const apiRoutes = require("./routes/apidata");

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.use("/items", itemRoutes);

app.use("/apidata", apiRoutes);


app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://forms.sitecorecloud.io');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});




app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});


