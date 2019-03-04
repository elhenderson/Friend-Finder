const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const path = require('path');


const app = express();

// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(cookieParser());

const PORT = process.env.PORT || 3000

app.set('view engine', 'pug');
app.set('views', './app/views')

const mainRoutes = require('./app/routing/htmlRoutes')
const JSONRoutes = require('./app/routing/apiRoutes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(upload.array());
app.use(express.static(path.join(__dirname, 'public')));
app.use(mainRoutes);
app.use('/api/friends', JSONRoutes)

app.listen(PORT, () => {
    console.log('The application is running on localhost:3000!')
});


