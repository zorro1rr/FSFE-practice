const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/demo", (req, res) => {
  res.set("Justin likes to code", "4life");
  res.status(418);
  res.send("Justin is a cool dude");
});
