const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

const data = require("./data/data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/ig/:username", (req, res) => {
  const { username } = req.params;
  const userData = data[username];
  if (userData) {
    res.render("instagram", { username, userData });
  } else {
    res.send("User not found");
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
