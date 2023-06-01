const mailService = require("./nodeMailer");

function handleMailbox(req, res, next) {
    
    mailService.sendMail(req.body).then(mailResponse => {
        if(mailResponse) res.json({status: 200, message: mailResponse})
    })
}

module.exports = {
    handleMailbox
}