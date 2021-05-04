const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const port = 3001;

app.get("/skills", (req, res) => {
  fs.readFile(
    path.join(__dirname, "/skills.csv"),
    { encoding: "utf-8" },
    (err, file) => {
      if (err) console.log(err);

      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "POST, GET");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      res.send(file);
    }
  );
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});