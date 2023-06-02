const mailService = require("./nodeMailer");

function handleMailbox(req, res, next) {
    
    mailService.handleMails(req.body).then(mailResponse => {
        if(mailResponse) res.json({status: 200, message: mailResponse})
    })
}

module.exports = {
    handleMailbox
}