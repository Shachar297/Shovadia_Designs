const nodemailer = require('nodemailer');

require("dotenv").config();



function sendMail(config) {
    const transporter = nodemailer.createTransport({
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

    return new Promise((resolve, reject) => {

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error);
                return;
            }
            console.log('Email sent: ' + info.response);
            resolve('Email sent: ' + info.response);
        });

    })
}

function generateAutoMailMessage(config) {
    if (config.hasMail) {
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
    sendMail
}