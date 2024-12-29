const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let const comments = [
  {
    id: uuid(),
    username: "Todd",
    comment: "LOL that is so funny",
  },
  {
    id: uuid(),
    username: "Raj",
    comment: "I like to go birdwatching with my dog",
  },
  {
    id: uuid(),
    username: "Kaushik",
    comment: "Plz delete your account, Todd",
  },
  {
    id: uuid(),
    username: "Ash",
    comment: "Wow thats nice",
  },
];

app.get("/comments", (req, res) => {
  res.render("index", { comments });
});

app.get("/comments/new", (req, res) => {
  res.render("new");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment, id: uuid() });
  res.redirect("/comments");
});

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('show',{comment})
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('edit',{comment})
})

app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment
    const foundComment = comments.find(c => c.id === id);
    //res.send('UPDATING SOMETHING!')
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})

app.delete('comments/:id', (req, res) => {
  const { id } = req.params;
  comments = comments.filter(c => c.id !== id);
  res.redirect('/comments')
});

app.get("/doc", (req, res) => {
  res.send("GET /doc response");
});

app.post("/doc", (req, res) => {
  const { meat, qty } = req.body;
  res.send(`OK, here are your ${qty} ${meat} doc`);
});

app.listen(3000, () => {
  console.log("YOU ARE ON PORT 3000!");
});
