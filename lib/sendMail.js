const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.MAILGUN_API;
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

const sendMail = (attendee, callback) => {
  const mailOptions = {
    from: "Mailgun Testers <mailgun@tester.org>",
    to: "send@example.com",
    subject: `${attendee.email}`,
    text: `Hallo ${attendee.name},\n\nVielen Dank für deine Anmeldung.\n\nDeine Anmeldedaten im Überblick:\nName: ${attendee.name}\nAdresse: ${attendee.address}\nWohnort: ${attendee.location}\nEmail: ${attendee.email}\nTelefon: ${attendee.phone}\nHochschule: ${attendee.highschool}\nGeschlecht: ${attendee.gender}\nAnmerkungen bzgl. Ernährung: ${attendee.nutrition}\nSonstiges: ${attendee.else}`
  };

  mailgun.messages().send(mailOptions, (error, data) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, data);
      console.log(mailOptions);
    }
  });
};

module.exports = sendMail;
