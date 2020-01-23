const mailgun = require("mailgun-js");
({
  apiKey: process.env.MAILGUN_API,
  domain: process.env.MAILGUN_DOMAIN
});

const sendConfirmation = attendee => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "Mailgun Testers <mailgun@tester.org>",
      to: "leonpe@web.de",
      subject: "Anmeldebestätigung",
      text: `Hallo ${attendee.name},\n\nVielen Dank für deine Anmeldung.\n\nDeine Anmeldedaten im Überblick:\nName: ${attendee.name}\nAdresse: ${attendee.address}\nWohnort: ${attendee.location}\nEmail: ${attendee.email}\nTelefon: ${attendee.phone}\nHochschule: ${attendee.highschool}\nGeschlecht: ${attendee.gender}\nAnmerkungen bzgl. Ernährung: ${attendee.nutrition}\nSonstiges: ${attendee.else}`
    };

    mailgun.messages().send(mailOptions, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const sendRequest = request => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: `${request.name} ${request.email}`,
      to: "loreirei@web.de",
      subject: `${request.subject}`,
      text: `${request.message}`
    };

    mailgun.messages().send(mailOptions, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { sendConfirmation, sendRequest };
