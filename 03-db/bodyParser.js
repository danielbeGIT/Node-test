const express = require('express');
const app = express();

app.use( express.static('static') );

// app.get(URL, CALLBACK/Function) req for request from server, res to answer request
app.get('/bodyParser', (req, res) => {
    console.log('GET /bodyParser');
    console.log(req.query); // GET -- data in query
    console.log("Name = " + req.query.name);
    console.log("Profile = " + req.query.profile);

    res.send('OK'); // answer the request
});

const bodyParser = require('body-parser');
const urlEncodedBodyParser = bodyParser.urlencoded( { extended: false } );

// app.get(URL, BODY PARSER, CALLBACK/Function)
app.post('/bodyParser', urlEncodedBodyParser, (req, res) => {
    console.log(req.query); // POST -- no data in query
    console.log(req.body);  // POST -- data in body IF using bodyParser
    console.log("Name = " + req.body.name);
    console.log("Profile = " + req.body.profile);

    res.send('OK');
});

// curl -X POST http://localhost:3000/bodyParserJson -H 'Content-Type: application/json' -d '{"name":"martin","email":"martin@apiva.se"}'
app.post('/bodyParserJson', express.json(), (req, res) => {
    console.log(req.query); // POST -- no data in query
    console.log(req.body);  // POST -- data in body IF using bodyParser
    console.log("Name = " + req.body.name);
    console.log("Email = " + req.body.email);

    res.send('OK');
});

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
