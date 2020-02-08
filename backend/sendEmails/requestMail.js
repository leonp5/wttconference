const sendRequest = request => {
  const mailOptions = {
    from: `Anfrage von ${request.name} ${process.env.INFO_MAIL}`,
    to: process.env.INFO_MAIL,
    subject: `${request.subject}`,
    text: `${request.message}\n\nDu kannst ${request.name} unter folgender E-Mailadresse antworten: ${request.email}`
  };
  return mailOptions;
};

module.exports = sendRequest;
