const workshopConfirmation = workshop => {
  const mailOptions = {
    from: "Waldorf Heute für Morgen <orga@team.de>",
    to: `${workshop.email}`,
    subject: "Deine Workshopanmeldung bei Waldorf Heute für Morgen",
    text: `Hallo ${workshop.firstName}!\n\nDu hast folgenden Workshop bei unserer Tagung "Waldorf Heute für Morgen" angmeldet:\n\nWorkshop: ${workshop.workshopName}\n\nWorkshop Beschreibung:\n${workshop.workshopDescription}\nDeine Nachricht:\n${workshop.message}\n\nBei Rückfragen erreichst du uns hier: https://wttconference.herokuapp.com/contact\n\nVielen Dank und bis bald :)`
  };

  return mailOptions;
};

module.exports = workshopConfirmation;
