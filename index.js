const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//Midlewares
app.use(express.json()); // this is a midlware that allows us to parce JSOn file when they are sent through an API
app.use(express.urlencoded({ extended: false })); // this is a midlware that allows us to parce ...

//Routes

app.use("/api/products", productRoute); // this means that eatch request that points to an api that starts with "api/products", will be directed to the route ProductRoute

app.get("/", (req, res) => {
  res.send("Hello from Node API server updated (Get API)");
});

mongoose
  .connect(
    "mongodb+srv://yassinemahmoud:yassinemahmoud@paris-cluster.z4bnnip.mongodb.net/simple-crud-app?retryWrites=true&w=majority&appName=Paris-cluster"
  )
  .then(() => {
    console.log("connected to databse");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
      // app.listen ... block is put inside mongoose.connect..., this is a best pratice (Ensure Database Connection Before Starting Server ) This avoids running the server if the database is not available.
    });
  })

  .catch(() => {
    console.log("connection to database failed");
  });
