const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
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

const sendConfirmation = attendee => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: `Leon ${process.env.EMAIL}`,
      to: `leonpe@web.de, ${attendee.email}`,
      subject: "Anmeldebestätigung Waldorf Heute für Morgen",
      text: `Liebe/r ${attendee.firstName},\n\nVielen Dank für deine Anmeldung zur Heute für Morgen-Tagung im Mannheimer Institut für Waldorfpädagogik vom 26.-28. Juni 2020!\n\nDeine Anmeldedaten im Überblick:\n\nName: ${attendee.name}, ${attendee.firstName}\nAdresse: ${attendee.address}\nWohnort: ${attendee.location}\nEmail: ${attendee.email}\nTelefon: ${attendee.phone}\nHochschule: ${attendee.highschool}\nGeschlecht: ${attendee.gender}\nAnmerkungen bzgl. Ernährung: ${attendee.nutrition}\nSonstiges: ${attendee.else}
      \n\n
      Solltest du noch weitere Fragen haben, wende dich gerne an das Tagungsbüro unter folgender Email-Adresse: info@...
      \n
      Bitte überweise den Tagungsbeitrag auf unten stehendes Konto:
      \n
      Trägergesellschaft für geisteswissenschaftliche Bildung gemeinnützige GmbH\n
      Sparkasse Rhein Neckar Nord\n
      IBAN DE25 6705 0505 0030 1924 51\n
      Verwendungszweck: „Studierendentagung“
      \n\n
      Wie du zur Tagung kommst, erfährst du hier:\n
      https://www.institut-waldorf.de/nc/de/service/allgemeine-informationen/anfahrt/?sword_list%5B0%5D=anfahrt
      \n\n
      Falls du im Mannheimer Seminar übernachten willst, denk an: Isomatte, Schlafsack, Handtuch… ;-)
      \n\n
      Wir freuen uns auf dich. 
      Mit herzlichen Grüßen,
      Carolin und Katharina
      `
    };

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

const sendRequest = request => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: `${request.name} ${request.email}`,
      to: process.env.EMAIL,
      subject: `${request.subject}`,
      text: `${request.message}`
    };

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

const sendWorkshopToOrgaTeam = workshop => {
  return new Promise((resolve, reject) => {
    const mailOptions = {
      from: `${workshop.firstName} ${workshop.name} ${workshop.email}`,
      to: process.env.EMAIL,
      subject: `Workshopanmeldung: ${workshop.workshopName}`,
      text: `Hallo!\n\n${workshop.firstName} ${workshop.name} hat folgenden Workshop angmeldet:\n\nWorkshop: ${workshop.workshopName}\n\nWorkshop Beschreibung:\n${workshop.workshopDescription}\n\nEr/Sie hat folgende Nachricht hinterlassen:\n${workshop.message}\n\n${workshop.firstName} ist unter folgender Emailadresse zu erreichen: ${workshop.email}`
    };

    transporter.sendMail(mailOptions, (error, data) => {
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
      from: "Waldorf Heute für Morgen <orga@team.de>",
      to: `${workshop.email}`,
      subject: "Deine Workshopanmeldung bei Waldorf Heute für Morgen",
      text: `Hallo ${workshop.firstName}!\n\nDu hast folgenden Workshop bei unserer Tagung "Waldorf Heute für Morgen" angmeldet:\n\nWorkshop: ${workshop.workshopName}\n\nWorkshop Beschreibung:\n${workshop.workshopDescription}\nDeine Nachricht:\n${workshop.message}\n\nBei Rückfragen erreichst du uns hier: https://wttconference.herokuapp.com/contact\n\nVielen Dank und bis bald :)`
    };

    transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { sendConfirmation, sendRequest, sendWorkshopToOrgaTeam, sendWorkshopToSupplier };
