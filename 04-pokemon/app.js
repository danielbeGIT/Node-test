const express = require('express');
const app = express();
const morgan = require('morgan');

// Use static files
app.use(morgan('combined'));
app.use(express.static('./static'));

// Will always run when route is running and has no callback
// Loading bodyparsers
app.use(express.json());
app.use(express.urlencoded( { extended: false } ));

app.use('/', require('./routes/index'));

app.listen(3000, () => {
    console.log('Server started at https://localhost:3000')
});

