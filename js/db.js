
function executePostAPI() {
    fetch(serverUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mail: "", role: "guest", platform: navigator.platform })
    });
}
