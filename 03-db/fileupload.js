const express = require('express');
const app = express();
const multer = require('multer');
const morgan = require('morgan');

// app.use( morgan('combined'));
app.use( morgan('short'));
app.use( express.static('static') );

/*
const urlencoded = express.urlencoded( { extended: false } );
const jsonenconder = express.json();
app.use(urlencoded);
*/

const storageObject = multer.diskStorage(
    {
        // destination for the uploaded file
        destination: (req, file, cb) => {
            cb(null, 'uploads');
        },

        // filename for the uploaded file
        filename: (req, file, cb) => {
            // cb(null, file.originalname); // file.originalname is used to keep the original name
            // cb(null, 'newPicture.jpg'); // file name will be "newPicture.jpg"

            // new unique file name with the current date/time converted to a unix number, and then to a string
            const uniqueFile = (new Date()).valueOf().toString();
            cb(null, uniqueFile + '-' + file.originalname); // file will get a unique "NumberString-OriginalName"
        }
    }
);

const multipartDataEncoder = multer( { storage: storageObject } );
app.post('/upload', multipartDataEncoder.single('myFile'), (req, res) => {
    console.log(req.file);

    res.send(req.file);
});

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});

