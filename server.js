const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(cookieParser());

const PORT = process.env.PORT || 3000

app.set('view engine', 'pug');

const mainRoutes = require('./app/routing/htmlRoutes')
const JSONRoutes = require('./app/routing/apiRoutes')


app.use(express.static(__dirname ))
app.use(mainRoutes);
app.use('/api/friends', JSONRoutes)

app.listen(PORT, () => {
    console.log('The application is running on localhost:3000!')
});


