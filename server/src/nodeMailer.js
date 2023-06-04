const 
    nodemailer = require('nodemailer'),
    sqlModule = require("./sql");

require("dotenv").config();

function handleMails(config) {

    let resolveMessage = ``
    return new Promise((resolve, reject) => {

        const
            transporter = nodemailer.createTransport({
                service: 'gmail', // e.g., 'gmail'
                port: 465,
                secure: true,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_APP_PASSWORD
                },
            }),
            mailOptions = {
                from: config.hasMail ? config.mail : `shovadia297@gmail.com`,
                to: process.env.MAIL_USER,
                subject: generateAutoMailMessage(config).subject,
                text: generateAutoMailMessage(config).text
            };


        if (config.hasMail) {
            mailOptions.to = config.mail;
            sendMail(transporter, mailOptions).then(data => {
                mailOptions.to = process.env.MAIL_USER;
                resolveMessage += data;
                sendMail(transporter, mailOptions).then(data => {
                    resolveMessage += data;
                    resolve(resolveMessage)
                }).catch(e => {
                    console.log(e)
                });
            }).catch(e => {
                console.log(e)
            });
        } else {
            sendMail(transporter, mailOptions).then(data => {
                resolveMessage += data;
                resolve(resolveMessage)
            }).catch(e => {
                console.log(e);
            });

        }
    })

}

function sendMail(transporter, mailOptions) {



    return new Promise((resolve, reject) => {

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error);
                return;
            }
            console.log('Email sent to : ' + mailOptions.to);
            resolve('Email sent to : ' + mailOptions.to);
        });

    })
}

function generateAutoMailMessage(config) {
    if (config.hasMail || config.subject != "") {
        return {
            subject: config.subject,
            text: config.message
        }
    }
    return {
        subject: `A user has viewed Fiverr gig, received from github pages.`,
        text: `A user has viewed Fiverr gig, received from github pages.`
    }
}

module.exports = {
    sendMail,
    handleMails
}