const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const app = express();
const port = 80;

// main().catch(err => console.log(err));

// Middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'ejs') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {}
    res.status(200).render('FOREST.ejs', params);
})


app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
