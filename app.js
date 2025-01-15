const express = require('express');
const app = express();
const path = require('path');//requring path for ejs files path




app.use(express.static(path.join(__dirname, 'public'))); //default path for static/public files.
app.set('view engin', 'ejs');//setting views engine for views templates
app.set('views', path.join(__dirname, 'views')); //setting path for views templates


app.get('/', (req, res) => {
    res.send("Home route is working");
})
app.get('/index', (req, res) => {
    res.render('index.ejs', { name: 'Vipin Yadav' });
})



//Instagram route
app.get('/ig/:username', (req, res) => {
    const instaData = require('./data.json');
    const { username } = req.params;
    const data = instaData[username];
    res.render('instagram.ejs', { username, data });
})




const port = 3000;
app.listen(port, () => {
    console.log(`listening at port ${port}`);
})