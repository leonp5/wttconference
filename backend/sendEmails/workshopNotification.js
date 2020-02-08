const workshopNotification = workshop => {
  const mailOptions = {
    from: `${process.env.WORKSHOP_MAIL}`,
    to: process.env.WORKSHOP_MAIL,
    subject: `Workshopanmeldung: ${workshop.workshopName}`,
    text: `Hallo!\n\n${workshop.firstName} ${workshop.name} hat folgenden Workshop angmeldet:\n\nWorkshop: ${workshop.workshopName}\n\nWorkshop Beschreibung:\n${workshop.workshopDescription}\n\nEr/Sie hat folgende Nachricht hinterlassen:\n${workshop.message}\n\n${workshop.firstName} ist unter folgender Emailadresse zu erreichen: ${workshop.email}`
  };
  return mailOptions;
};

module.exports = workshopNotification;
