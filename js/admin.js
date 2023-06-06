let
    username = "",
    adminUser = localStorage.getItem("Username"),
    serverUrl = "https://dca5-2a06-c701-4ed2-2900-a02d-8636-baa5-5369.ngrok-free.app";

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
    executeGetAPI("admin/").then(jsonData => {
        setUsersDom(jsonData);
    })
    executeGetAPI("admin/roles/").then(jsonData => {
        console.log(jsonData)
        setRolesDom(jsonData)
    })
    executeGetAPI("admin/users/total/").then(jsonData => {
        document.getElementById("totalUsers").innerHTML = jsonData["COUNT(*)"]
        // setRolesDom(jsonData)
    })
}

function setUsersDom(jsonDataArray) {
    const tableBody = document.querySelector("#users-table tbody");
    for (let i = 0; i < jsonDataArray.length; i++) {
        const jsonData = jsonDataArray[i],
            newRow = document.createElement("tr"),
            emailCell = document.createElement("td");

        emailCell.textContent = jsonData.email;

        const
            userRoleCell = document.createElement("td"),
            idCell = document.createElement("td"),
            userPlatformCell = document.createElement("td");

        userPlatformCell.textContent = jsonData.platform
        userRoleCell.textContent = jsonData.user_role;
        idCell.textContent = jsonData.id;

        newRow.appendChild(emailCell);
        newRow.appendChild(userRoleCell);
        newRow.appendChild(idCell);
        newRow.appendChild(userPlatformCell)

        tableBody.appendChild(newRow);
    }
    // document.getElementById("totalUsers").innerHTML = jsonDataArray
}

function setRolesDom(jsonDataArray) {
    const tableBody = document.querySelector("#roles-table tbody");
    for (let i = 0; i < jsonDataArray.length; i++) {
        const jsonData = jsonDataArray[i],
            newRow = document.createElement("tr"),
            emailCell = document.createElement("td");

        emailCell.textContent = jsonData.role;

        const
            userRoleCell = document.createElement("td"),
            idCell = document.createElement("td");


        userRoleCell.textContent = jsonData.description;
        idCell.textContent = jsonData.id;
        newRow.appendChild(emailCell);
        newRow.appendChild(userRoleCell);
        newRow.appendChild(idCell);


        tableBody.appendChild(newRow);
    }
}

function executeGetAPI(endpoint) {
    return fetch(serverUrl + endpoint, {
        method: "GET"
    }).then(json => json.json()).then(data => {
        return data
    })
}