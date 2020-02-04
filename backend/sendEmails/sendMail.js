const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 25,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PW
  },

  tls: {
    rejectUnauthorized: false
  }
});

const sendEmail = mailData => {
  return new Promise((resolve, reject) => {
    const mailOptions = mailData;
    transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        reject(error);
        console.log(error);
      } else {
        console.log("Message sent: %s", data.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(data));
        resolve(data);
      }
    });
  });
};

module.exports = sendEmail;
