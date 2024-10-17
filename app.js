const express = require('express'); // Mengimport express
const app = express();
const port = 3000;
const todoroutes = require('./routes/todo.js');

app.use(express.json());

app.use('/todos',todoroutes);
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`); // Gunakan backticks (``) untuk template literals
});
