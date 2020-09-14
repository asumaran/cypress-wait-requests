const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Requested-With, Accept"
  );
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  next();
});

app.use(function(req, res, next) {
  setTimeout(next, 3000);
});

app.post("/graphql", (req, res) => {
  let response = {};

  if (req.body.query === "query1") {
    response = {
      query: "First Response",
    };
  }

  if (req.body.query === "query2") {
    response = {
      query: "Second Response",
    };
  }

  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
