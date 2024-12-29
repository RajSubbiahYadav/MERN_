const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");
console.log(redditData);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); ///this we want to use by default so that i we run the index.js from other directory th view folder ill not be seen

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/cats", (req, res) => {
  const cats = ["Ramu", "Dolu", "Bolu", "Bheem", "Jaggu"];
  res.render("cats", { cats });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random", { num });
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 3000");
});
