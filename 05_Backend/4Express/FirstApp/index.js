const express = require("express");
const app = express();
console.dir(app);

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     //res.send("HELLO, WE GOT YOUR REQ! THIS IS YOUR RESPONSE")
//     res.send('<h1>THIS IS MY WEB PAGE!!</h1>')
// })

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.get("/", (req, res) => {
  res.send("<h1>WELCOME TO THE HOME PAGE!!!</h1>");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params; //console.log(req.params);
  res.send(`<h1>Browing the ${subreddit} subreddit</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params; //console.log(req.params);
  res.send(
    `<h1>Viewing Post ID: ${postId} on the Browing the ${subreddit} subreddit</h1>`
  );
});

app.get("/cats", (req, res) => {
  res.send("MEOW!!");
});

app.post("/cats", (req, res) => {
  res.send("POST REQUEST TO /cats!! THIS IS DEFFERENT THE GET REQUEST");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF!!");
});

// app.get('/search', (req, res) => {
//     console.log(req.query);
//     res.send('hi')
// })

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("NOTHING FOUND IF NOTHING SEARCH");
  }
  res.send(`<h1>Search result for: ${q}</h1>`);
});

app.get("*", (req, res) => {
  res.send(`I don't know that path`);
});

app.listen(8080, () => {
  console.log("LISTENING ON PORT 8080!");
});
