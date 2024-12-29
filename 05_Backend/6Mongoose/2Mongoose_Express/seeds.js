const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!");
    console.log(err);
  });

// const p = new Product({
//   name: "Tomato",
//   price: 50,
//   catogery: "vegetable",
// });

// p.save()
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const seedProducts = [
    {
        name: 'Feiry Eggplant',
        price: 7.00,
        category: 'dairy'
    },
    {
        name: 'Organic Vege',
        price: 700,
        category: 'vegetable'
    },
    {
        name: 'Appusu Fruit',
        price: 200,
        category: 'fruit'
    },
    {
        name: 'Apple farm',
        price: 150,
        category: 'fruit'
    },
    {
        name: 'Jason Dairy',
        price: 40,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
    console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
