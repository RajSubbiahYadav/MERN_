const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/movieApp")
  .then(() => {
    console.log("connection open");
  })
  .catch(() => {
    console.log("error");
    console.log(err);
  });

const movieSchema = new mongoose.Schema({
  titile: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
// // const leo = new Movie({ title: "Leo", year: 2023, score: 9.8, rating: "R" });

// Movie.insertMany([
//   { title: "Theri", year: 2017, score: 8.9, rating: "R" },
//   { title: "RajaRani", year: 2015, score: 9.6, rating: "S" },
//   { title: "Mersal", year: 2019, score: 9.9, rating: "R" },
//   { title: "Bigil", year: 2021, score: 9.0, rating: "S" },
//   { title: "Jawan", year: 2023, score: 8.3, rating: "S" }

// ])


// .then(data => {
//   console.log("It Worked!!")
//   console.log(data);
// })