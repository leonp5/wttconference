const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API,
  domain: process.env.MAILGUN_DOMAIN
});

const sendConfirmation = attendee => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "Mailgun Testers <mailgun@tester.org>",
      to: `leonpe@web.de, ${attendee.email}`,
      subject: "Anmeldebestätigung",
      text: `Hallo ${attendee.firstName},\n\nVielen Dank für deine Anmeldung.\n\nDeine Anmeldedaten im Überblick:\nName: ${attendee.name}, ${attendee.firstName}\nAdresse: ${attendee.address}\nWohnort: ${attendee.location}\nEmail: ${attendee.email}\nTelefon: ${attendee.phone}\nHochschule: ${attendee.highschool}\nGeschlecht: ${attendee.gender}\nAnmerkungen bzgl. Ernährung: ${attendee.nutrition}\nSonstiges: ${attendee.else}`
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

const sendWorkshopToOrgaTeam = workshop => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: `${workshop.firstName} ${workshop.name} ${workshop.email}`,
      to: "loreirei@web.de",
      subject: `Workshopanmeldung: ${workshop.workshopName}`,
      text: `Hallo!\n\n${workshop.firstName} ${workshop.name} hat folgenden Workshop angmeldet:\n\nWorkshop: ${workshop.workshopName}\n\nWorkshop Beschreibung:\n${workshop.workshopDescription}\n\nEr/Sie hat folgende Nachricht hinterlassen:\n${workshop.message}\n\n${workshop.firstName} ist unter folgender Emailadresse zu erreichen: ${workshop.email}`
    };

    console.log(mailOptions);

    mailgun.messages().send(mailOptions, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

const sendWorkshopToSupplier = workshop => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: "<leonpe@web.de>",
      to: `${workshop.email}`,
      subject: "Deine Workshopanmeldung",
      text: `Hallo ${workshop.firstName}!\n\nDu hast folgenden Workshop bei unserer Tagung "Waldorf Heute für Morgen" angmeldet:\n\nWorkshop: ${workshop.workshopName}\n\nWorkshop Beschreibung:\n${workshop.workshopDescription}\nDeine Nachricht:\n${workshop.message}\n\nBei Rückfragen erreichst du uns hier: https://wttconference.herokuapp.com/contact\n\n
      Vielen Dank und bis bald :)`
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

module.exports = { sendConfirmation, sendRequest, sendWorkshopToOrgaTeam, sendWorkshopToSupplier };
