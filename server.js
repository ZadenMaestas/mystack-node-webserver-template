import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';
// Import endpoints and other needed JS files here
import {example} from "./api_endpoints/exampleEndpoint.js";

const PORT = 5000

const mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "txt": "text/plain",
    "js": "text/javascript",
    "css": "text/css"
};

// Start the file server for serving the website

// Credits to https://stackoverflow.com/a/35995384/14688226 for the file server code
// Heavily adapted by me to work as an API and added some QOL features
console.info("Starting File Server On http://127.0.0:5000")
http.createServer((request, response) => {
    let pathname = url.parse(request.url).pathname;
    let filename = "";
    let api = false;
    /* HTML Page Serving */
    if (pathname === "/") {
        filename += "pages/index.html";
    }

    /* API Endpoints:
    * /api/example
        * Parameters:
            * toPrint: String to return as JSON response
    */
    else if (pathname.search("/api/example") !== -1) {
        api = true // Inform the server that an API endpoint was accessed rather than a file
        example(request, response) // It is mandatory to pass the request and response parameters
        // The rest of the /api/example endpoint logic is handled in /api_endpoints/exampleEndpoint.js
    } else{ // If no API endpoint was requested
        filename = path.join(process.cwd(), pathname)
    }
    if (!api) {
        try {
            fs.accessSync(filename, fs.F_OK);
            let fileStream = fs.createReadStream(filename);
            let mimeType = mimeTypes[path.extname(filename).split(".")[1]];
            response.writeHead(200, {'Content-Type': mimeType});
            fileStream.pipe(response);
        } catch (e) {
            let notFoundMessage = `404 '${pathname}' Not Found\n`;
            console.log('Requested file not found: ' + pathname);
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write(notFoundMessage);
            response.end();
            return;
        }
    }
}).listen(PORT);
