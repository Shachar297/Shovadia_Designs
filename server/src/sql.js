const connection = require("./Connection"),
    EnumUserRoles = require("./EnumUserRoles").EnumUserRoles;


function createUserEntry(userRole, mail = "guest") {

    let
        sql = `
            INSERT INTO users
            (email, user_rule)
            VALUES (?,1)`,
        parameters = [mail, userRole];

    return connection.executeWithParameters(sql, parameters);
}

function getAllUserRoles() {
    let sql = `SELECT * FROM roles;`

    return connection.execute(sql);
}

function getAllUsers() {
    let sql = `
    SELECT users.email, users.user_role, users.id, roles.id 
    FROM users
    JOIN roles on roles.id = users.user_role;
    `

    return connection.execute(sql);
}

module.exports = {
    createUserEntry,
    getAllUserRoles,
    getAllUsers
}