// DO NOT ALTER THIS FILE, MyStack requires the functions below.

// Function to parse a URL and return object representation
export function readUrl(url, singleArgMode = false) {
    // Utility function for heavily reducing boilerplate when url requests
    let splitString;
    for (let charPos in url) {
        let char = url[charPos]
        if (char === '?') {
            charPos++
            splitString = url.slice(charPos, url.length)
            break
        }
    }
    if (splitString === undefined || splitString[0] === undefined) {
        return null;
    } else {
        if (!singleArgMode) {
            splitString = splitString.replace("&", '=')
        }
        let parameters = splitString.split("=")
        return {"rawUrl": url, "parameters": parameters};
    }
}
