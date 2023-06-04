let
    username = "",
    adminUser = localStorage.getItem("Username"),
    serverUrl = "http://localhost:8442/";

initAdminPanel();
function initAdminUser() {
    if (adminUser == "Shovadia_admin") return;

    if (window.location.href.indexOf("admin") > -1) {
        username = prompt("Please insert Username : ");

        if (username == adminUser) {
            localStorage.setItem("Username", username);
        } else {
            window.location.href = "/index.html"
            localStorage.removeItem("Username");
        };

    }

}

function initAdminPanel() {
    initAdminUser();
    executeGetAPI("admin/").then(data => {
        console.log(data)
    })
    executeGetAPI("admin/roles/").then(data => {
        console.log(data)
    })
}

function executeGetAPI(endpoint) {
    return fetch(serverUrl + endpoint, {
        method: "GET"
    }).then(json => {
        console.log(json)
    });
}