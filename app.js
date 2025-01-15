const express = require('express');
const app = express();
//requring path for ejs files path
const path = require('path');



//setting views engine for views templates
app.set('view engin', 'ejs');
//setting path for views templates
app.set('views', path.join(__dirname, 'views'));


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