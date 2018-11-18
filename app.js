var nodemailer = require('nodemailer');
const creds = require('./config/config');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: 25,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

let HelperOptions = {
    from: '"Quest" quest@gmail.com',
    to: 'danilobojovic0@gmail.com',
    attachments: [
        {   // utf-8 string as an attachment
            filename: 'text1.txt',
            content: 'hello world!'
        },
    ],
    subject: 'dd',
    text: 'dd'
};



transporter.sendMail(HelperOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log("The message was sent!");
    console.log(info);
});