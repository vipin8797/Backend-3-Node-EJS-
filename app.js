const express = require('express');
const app = express();

const path = require('path');//requring path for ejs files path




app.set('view engin', 'ejs');//setting views engine for views templates

app.set('views', path.join(__dirname, 'views')); //setting path for views templates


app.get('/', (req, res) => {
    res.send("Home route is working");
})
app.get('/index', (req, res) => {
    res.render('index.ejs');
})



const port = 3000;
app.listen(port, () => {
    console.log(`listening at port ${port}`);
})