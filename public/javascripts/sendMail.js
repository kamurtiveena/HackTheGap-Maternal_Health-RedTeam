"use strict";


const nodemailer = require("nodemailer");

function test() {
    console.log("Hey you !");
}

// async..await is not allowed in global scope, must use a wrapper
async function main(receiver) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        // host: "smtp.ethereal.email",
        // port: 587,
        // secure: false, // true for 465, false for other ports
        // auth: {
        //     user: 'payton.heidenreich90@ethereal.email',
        //     pass: 'jxaHdKAdU6XNhc1rE5' // generated ethereal password
        // },
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            clientId: '860282633539-ugviu6i9i79418rj9f7mt8jmhn5ac80s.apps.googleusercontent.com',
            clientSecret: 'vFnhJ_7d_evB4JPc-zYw4K5G',
            refreshToken: '1//04t3V3yDdjqeECgYIARAAGAQSNwF-L9IrzQvelSlfbWpmy09LKCHs3znZTQtOF-Mhydqp9uKYwUMoWw5etWDaedVZRFBU_D_2xLU',
            accessToken: 'ya29.a0AfH6SMBNWJ6W5sw1jzyCDVW98qSQ2L5r_ECc0xPtu0cCbmJCVN8KTHRsXOiFncTYV4jpaVf4PrMT4x2GVpy6gHFxviWTDpFE5oeVckcbI8RQ6auErCggC66_rEQUGvVhQwCxxHf02RyzUQDOXlSdyeMVEDmq',
            user: 'codeblitz11@gmail.com',
            pass: 'codeBlitz25'
        }
        // user: 'gerald10@ethereal.email',
        // pass: 'ppA9ugEZry6zjkVfv6'
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Special" <codeblitz11@gmail.com>', // sender address
        to: receiver, // list of receivers
        subject: "World ", // Subject line
        text: "Thank you for reaching out. Look forward to being provide better services", // plain text body
        // html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = main;