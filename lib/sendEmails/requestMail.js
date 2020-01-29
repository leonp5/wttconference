const sendRequest = request => {
  const mailOptions = {
    from: `${request.name} ${request.email}`,
    to: process.env.EMAIL,
    subject: `${request.subject}`,
    text: `${request.message}`
  };
  return mailOptions;
};

module.exports = sendRequest;
