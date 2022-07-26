// Example script, feel free to replace it with your own
async function apiExampleShowcase(toPrint){
    let response = await fetch(`/api/example?toPrint=${encodeURIComponent(toPrint)}`);
    let jsonResponse = await response.json();
    alert(`Response from /api/example:\n\n${JSON.stringify(jsonResponse)}`)
}
