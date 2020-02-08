const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.INFO_MAIL,
    pass: process.env.INFO_MAIL_PW
  },

  tls: {
    rejectUnauthorized: false
  }
});

const sendInfoEmail = mailData => {
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

const workshopTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.WORKSHOP_MAIL,
    pass: process.env.WORKSHOP_MAIL_PW
  },

  tls: {
    rejectUnauthorized: false
  }
});

const sendWorkshopEmail = mailData => {
  return new Promise((resolve, reject) => {
    const mailOptions = mailData;
    workshopTransporter.sendMail(mailOptions, (error, data) => {
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

module.exports = { sendInfoEmail, sendWorkshopEmail };
