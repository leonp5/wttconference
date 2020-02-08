const registrationNotification = attendee => {
  const mailOptions = {
    from: `${process.env.INFO_MAIL}`,
    to: process.env.INFO_MAIL,
    subject: `Tagungsanmeldung ${attendee.firstName} ${attendee.name}`,
    text: `Hallo!\n\n${attendee.firstName} ${attendee.name} hat sich für die Tagung angmeldet.\n\nDie Anmeldedaten im Überblick:\n\nName: ${attendee.firstName} ${attendee.name}\nAdresse: ${attendee.address}\nWohnort: ${attendee.location}\nEmail: ${attendee.email}\nTelefon: ${attendee.phone}\nHochschule: ${attendee.highschool}\nGeschlecht: ${attendee.gender}\nAnmerkungen bzgl. Ernährung: ${attendee.nutrition}\nSonstiges: ${attendee.else}`
  };
  return mailOptions;
};

module.exports = registrationNotification;
