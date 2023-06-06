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
            res.json(users)
        });
    } else if (req.route.path == "/admin/roles/") {
        sqlModule.getAllUserRoles().then(roles => {
            res.json(roles)
        });

    } else if(req.route.path == "/admin/users/total/"){
              sqlModule.getTotalUsers().then(roles => {
            res.json(roles[0])
        });
    }
}

function handleDatabaseRequest(req, res,next) {
    const userData = {
        email : req.body.mail,
        role : req.body.role,
        platform : req.body.platform
    }


    sqlModule.createUserEntry(userData).then(res => {
        console.log(res)
    }).catch(e => {
        console.log(e)
    })
}

module.exports = {
    handleMailbox,
    handleAdminRequest,
    handleDatabaseRequest
}