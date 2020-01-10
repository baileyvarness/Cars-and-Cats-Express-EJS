const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.get('/cars', (request, response) => {
   response.render("cars");
});

app.get('/cars/new', (request, response) => {
   response.render("newcar");
});

app.get('/cats', (request, response) => {
   response.render("cats");
});


app.listen(8000, () => console.log("listening on port 8000"));