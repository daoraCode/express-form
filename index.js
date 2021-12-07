// express instanciation
const express = require("express");
const app = express();

// default port 5000
const port = 5000;

// handlebars settings
const engine = require("express-handlebars").engine;
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// urlencoding for req.body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/form/signup', (req, res) => {
    console.log(req.body)
    res.redirect('/')
  })

// server started
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
