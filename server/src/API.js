const mailService = require("./nodeMailer"),
sqlModule = require("./sql");

function handleMailbox(req, res, next) {

    mailService.handleMails(req.body).then(mailResponse => {
        if (mailResponse) res.json({ status: 200, message: mailResponse })
    })
}

function handleAdminRequest(req, res, next) {
    if (req.route.path == "/admin/") {
        sqlModule.getAllUsers().then(users => {
            console.log(users)
            res.json(users)
        });
    } else if (req.route.path == "/admin/roles/") {
        sqlModule.getAllUserRoles().then(roles => {
            res.json(roles)
        });

    } else {

    }
}

module.exports = {
    handleMailbox,
    handleAdminRequest
}