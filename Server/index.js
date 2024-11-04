const express = require("express");
const app = express();

const PORT = 3000;

app
  .get("/", (req, res) => {
    res.send("hello world");
  })
  .get("/about", (req, res) => {
    res.send("about us");
  });
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
