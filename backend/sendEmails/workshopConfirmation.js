const workshopConfirmation = workshop => {
  const mailOptions = {
    from: `Waldorf Heute für Morgen ${process.env.WORKSHOP_MAIL}`,
    to: `${workshop.email}`,
    subject: "Deine Workshopanmeldung bei Waldorf Heute für Morgen",
    text: `Hallo ${workshop.firstName}!\n\nDu hast folgenden Workshop bei unserer Tagung "Waldorf Heute für Morgen" angmeldet:\n\nWorkshop: ${workshop.workshopName}\n\nWorkshop Beschreibung:\n${workshop.workshopDescription}\nDeine Nachricht:\n${workshop.message}\n\nBei Rückfragen erreichst du uns hier: https://waldorf-heute-fuer-morgen.de/contact\n\nVielen Dank und bis bald :)`
  };

  return mailOptions;
};

module.exports = workshopConfirmation;
