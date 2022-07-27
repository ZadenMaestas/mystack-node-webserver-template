// Import endpoints and other needed JS files here
import {example} from "./api_endpoints/exampleEndpoint.js";
import {webServer} from "./mystack/webServer.js";

// Bind site pages to html files in /pages/
const pages = {
    "/": "index.html"
};
// Bind API Endpoints
const endpoints = {
    "example": example
}

/*
Pages:
* / : index.html

API Endpoints:
* /api/example
    * Parameters:
        * toPrint: String to return as JSON response
*/
webServer(pages, endpoints, {"port": 5000})
