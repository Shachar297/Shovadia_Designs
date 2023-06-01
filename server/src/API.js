const mailService = require("./nodeMailer");

function handleMailbox(req, res, next) {
    
    mailService.sendMail(req.body)
}

module.exports = {
    handleMailbox
}