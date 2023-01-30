/**
 * express
 */

const express = require('express');
// const _ = require('lodash');
const morgan = require('morgan');
const path = require('path');
const oneliners = require('./data/oneliners.json');
const users = require('./data/users.json');
const app = express();

// tell express to use ejs as its view engine
app.set('view engine', 'ejs');

// // Inject logic to all incoming requests
// app.use( (req, res, next) => {
//     console.log(`Incoming ${req.method} request for ${req.url}`)
//     next();
// });

//  use morgan http request logger
app.use( morgan('dev') );

// Respond to GET request for '/'
app.get('/', (req, res) => {
    //  req = information about the incoming request
    //  res = methods to send an answer for the request
    // console.log(req.method, req.url);

    // res.send('Hello from root');
    res.render('index', { 
        title: "Express server", 
        users // can be typed as "users: users,"
    });
});

// Respond to GET request for `/users/:userId`
app.get('/users/:userId', (req, res) => {
	// Somehow use req.params.userId to get the corresponding user from the users array,
	// and send that user to a view (which displays that user's information)
    
	console.log(`Would show user with id ${req.params.userId}`);
    res.send(`Would show user with id ${req.params.userId}`);

	// res.render('user', { 
    //     user: users.name.first,
    //     email: users.email
    // });
});

// Respond with current time
app.get('/now', (req, res) => {
    res.send(`The current time is ${new Date()}`);
})

// Respond to GET request for '/about'
app.get('/about', (req, res) => {
    // res.set('Content-Type', 'text/html');

    // res.write('<h1>About</h1>');
    // res.write('<p>This is the about page.</p>');

    // res.end();

    res.sendFile(__dirname + '/pages/about.html');
});

// Respond to GET request for '/nom'
app.get('/nom', (req, res) => {
    res.sendFile( path.join(__dirname, 'pages/nom.html') );
});

// Respond to GET request for '/api/nom'
app.get('/api/nom', (req, res) => {
    res.send({ msg: 'Cakes are nomnomnom'});
});


// Respond with a random oneliner joke
app.get('/jokes', (req, res) => {

	// 1. Somehow read the JSON-contents of data/oneliners.json
    // const onliners = require('./data/oneliners.json')

	// 2. Get a random item from the array
    const random = Math.floor(Math.random() * oneliners.length);
    // const oneliner = _.sample(oneliners);    // lodash

    const oneliner = oneliners[random];

	// 3. Respond with the item (`res.send(item)`)
    // res.send(oneliner)

    res.render('jokes', { 
        joke: oneliner, // can be typed as "oneliner,"
        title: "A random oneliner for you" 
    });
});


// Serve files from '/public' if no other route matches, have to type in .html('index.html)
app.use( express.static('pages') );

// let the user know we're sorry
app.use( (req, res, next) => {
    res.send('Sorry we could not find that page.')
});

// Start listening for incoming requests on port 3000
app.listen(3000, () => {
    console.log(`Server started at http://localhost:3000`);
});