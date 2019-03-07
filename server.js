const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000

//Sets which view engine to use
app.set('view engine', 'pug');
//points to the folder where views are located
app.set('views', './app/views')

//stores the path to routing files for different pages and the api, respectively
const mainRoutes = require('./app/routing/htmlRoutes')
const apiRoutes = require('./app/routing/apiRoutes')

//returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option
//when no type is specified, type defaults to application/json
app.use(bodyParser.json());
//extracts data from survey and adds it to the body property in the request object
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname)));
//directs the server to use the paths declared earlier
//This one uses the root directory
app.use(mainRoutes);
//This one uses the directory located at /api/friends
app.use('/api/friends', apiRoutes)

app.listen(PORT, () => {
    console.log('The application is running on localhost:3000!')
});


