const express = require("express");
const app = express();
const userController = require("./controllers/users");
const productController = require("./controllers/products");

const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname + "/dist"));

// Controllers
app
  .get("/", (req, res) => {
    res.send("hello world");
  })
  .get("/about", (req, res) => {
    res.send("about us");
  })
  .use("/api/v1/users", userController)
  .use("/api/v1/products", productController);

  .get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html")
  })
// .get("/contacts", (req, res) => {
//   res.send([
//     { name: "john", phone: "555-555-5555" },
//     { name: "jim", phone: "555-555-5555" },
//     { name: "jane", phone: "555-555-5555" },
//   ]);
// })
// .get("/contacts/:name", (req, res) => {
//   res.send({ name: req.params.name, phone: "555-555-5555" });
// });

app.listen(PORT, () => {
  console.log("server is running at http://localhost:" + PORT);
});
