/**
 * Path
 * <https://nodejs.org/dist/latest-v16.x/docs/api/fs.html>
 */

console.log("Abs path dir:", __dirname);
console.log("Abs path file:", __filename);

const path = require('path');

const file_wo_path = path.basename(__filename); // easy way to find the file name without the path to it "03-path.js"
console.log("Filename without path", file_wo_path)

const file_ext = path.extname(__filename); // easy way to find the file type without file name and path ".js"
console.log("My extension is:", file_ext)

// Similar function to split array
const parts = path.parse(__filename); // easy way to find path, name and ext "split" { path, name, ext }
console.log("All my parts:", parts)

