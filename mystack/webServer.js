import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';
import * as path from 'path';


const mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "txt": "text/plain",
    "js": "text/javascript",
    "css": "text/css",
    "ico": "image/x-icon"
};

/**
 * Entry point function for MyStack Framework
 */
export function webServer(pages, endpoints, options) {
    // Credits to https://stackoverflow.com/a/35995384/14688226 for the file server code
    // Heavily adapted by me to work as an API and added some QOL features
    console.info("Starting File Server On http://127.0.0:5000")
    http.createServer((request, response) => {
        let pathname = url.parse(request.url).pathname;
        let filename = "";
        let api = false;
        /* HTML Page Serving */
        if (Object.keys(pages).includes(pathname.split("?")[0])) {
            filename += `pages/${pages[pathname.split("?")[0]]}`;
        }
        /* API Endpoint Management */
        else if (pathname.search("/api/") !== -1) {
            api = true // Inform the server that an API endpoint was accessed rather than a file
            let accessedEndpoint = pathname.split("/api/")[1]
            let endpoint_function = endpoints[accessedEndpoint]
            if (endpoint_function) {
                endpoint_function.call(this, request, response)
            } else {
                response.writeHead(404, {'Content-Type': 'text/plain'})
                response.write(`404 - No API Endpoint For ${pathname}`);
                response.end();
            }
        } else { // If no API endpoint was requested
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
            }
        }
    }).listen(options["port"]);
}
