const express = require("express");
const https = require("https");
const path = require("path");

const app = express();
const port = 8080;

// index.html에서 사용하는 css나 js파일을 로딩하기 위해
// index.html에서의 static을 잡아준다.
app.use(express.static("./"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
