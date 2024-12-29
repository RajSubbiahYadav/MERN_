const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("connection open");
  })
  .catch(() => {
    console.log("error");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    maxlength: 20,
    min: 0,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default:0
    }
  },
});
const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Tire Pump",
  price: 19.50,
  categories: ['Cycling', 'Saftey'],
});

bike
  .save()

//product.findOneAndUpdate({ name: 'Tire Pump'},{ price: 100},{new: true})

  .then((data) => {
    console.log("IT WORKED!!");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH NO ERROR!");
    console.log(err);
  });
