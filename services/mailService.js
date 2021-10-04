const nodemailer = require("nodemailer");
module.exports = async ({ from, to, subject, text, html}) => {
        let transporter = nodemailer.createTransport({
            host: smtp-relay.sendinblue.com,
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "19dce070@charusat.edu.in", // generated ethereal user
                pass: OHFEBPqLh3RNm7UI, // generated ethereal password
            },
        });

        // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `quickShare <${from}>`, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}

module.exports = sendMail;