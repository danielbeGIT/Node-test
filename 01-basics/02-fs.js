/**
 * File System
 * <https://nodejs.org/dist/latest-v16.x/docs/api/fs.html>
 * 
 * commonly used methods are:
 * readdir() - read contents of a directory
 * readFile() - read a file
 * writeFile() - write to a file
 * unlink() - delete a file
 * mkdir() - make a directory
 * rmdir() - delete a directory
 */


/**
 * readdir using callbacks
 */

/*
const fs = require('fs');
console.log("Before readdir...");

// list contents in current directory
fs.readdir('.',  (err, data) => {
    console.log("The Contents in the current directory is:");
    console.log(data);
    // read data
});

console.log("After readdir...");
*/


/**
 * readdir using promises
 */

const fs = require('fs').promises;

fs.readdir('.')
    .then(data => {
        console.log("The Contents in the current directory is:");
        console.log(data);
    })
    .catch(e => {
        console.error(e);
    });


/**
 * readFile using promise
 */

fs.readFile('./data/loremipsum.txt', 'utf-8') // utf-8 format the content in the file to text/utf-8. it becomes binary without it
.then(data => {
    console.log("Here's the data of your file:");
    console.log(data);
})
.catch(e => {
    console.error(e);
});

