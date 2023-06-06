const connection = require("./Connection"),
    EnumUserRoles = require("./EnumUserRoles").EnumUserRoles;


function createUserEntry(userData) {
    if (userData.role == "guest") {
        userData.role = 1;
    }
    let
        sql = `
            INSERT INTO users
            (email, user_role, platform)
            VALUES (? ,?, ?)`,
        parameters = [userData.mail = "", userData.role, userData.platform];

    return connection.executeWithParameters(sql, parameters);
}

function getAllUserRoles() {
    let sql = `SELECT * FROM roles;`

    return connection.execute(sql);
}

function getAllUsers() {
    let sql = `
    SELECT users.email, users.user_role, users.id, users.platform, roles.id
FROM users
LEFT JOIN roles ON roles.id = users.user_role;
    `

    return connection.execute(sql);
}
function getTotalUsers() {
    let sql = `SELECT COUNT(*) FROM users AS totalUsers`;
    return connection.execute(sql);

}
module.exports = {
    createUserEntry,
    getAllUserRoles,
    getAllUsers,
    getTotalUsers
}