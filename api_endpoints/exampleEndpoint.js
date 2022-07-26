import {readUrl} from "../.mystack/utils.js";

export function example(req, res) {
    /*
    Example Call: /api/example?toPrint=test

    Template developer API notices:
    * Please note that args are positional, this is only temporary until I work on a slightly better solution for
      URL parsing
    * If someone actually uses this template and comes up with one please submit an issue detailing the fix or even
       better a pull request with the implementation
    */
    let parsedUrl = readUrl(req.url)
    // Args currently is a key, value array:
    // Example: ["toPrint", "Hello, World!]
    res.writeHead(200, {'Content-Type': 'application/json'});
    let args = (parsedUrl !== null) ? parsedUrl.parameters : null
    if (args === null) {
        res.write(`{"error": "Missing Required Argument: toPrint"}`);
    } else if (args[0] === "toPrint") {
        let toPrint = args[1]
        res.write(`{"Response": "${toPrint}"}`);
    }
    res.end()
}

