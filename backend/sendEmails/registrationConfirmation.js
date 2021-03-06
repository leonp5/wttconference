const registrationConfirmation = attendee => {
  const mailOptions = {
    from: `Waldorf-Heute-für-Morgen ${process.env.INFO_MAIL}`,
    to: `${attendee.email}`,
    subject: "Anmeldebestätigung Waldorf Heute für Morgen",
    text: `Liebe/r ${attendee.firstName},\n\nVielen Dank für deine Anmeldung zur Heute für Morgen-Tagung im Mannheimer Institut für Waldorfpädagogik vom 26.-28. Juni 2020!\n\nDeine Anmeldedaten im Überblick:\n\nName: ${attendee.name}, ${attendee.firstName}\nAdresse: ${attendee.address}\nWohnort: ${attendee.location}\nEmail: ${attendee.email}\nTelefon: ${attendee.phone}\nHochschule: ${attendee.highschool}\nGeschlecht: ${attendee.gender}\nAnmerkungen bzgl. Ernährung: ${attendee.nutrition}\nSonstiges: ${attendee.else}
      \n\n
      Solltest du noch weitere Fragen haben, wende dich gerne an das Tagungsbüro unter folgender Email-Adresse:
      info@waldorf-heute-fuer-morgen.de
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
      Wir freuen uns auf dich!\n
      Mit herzlichen Grüßen,
      Carolin und Katharina
      `
  };
  return mailOptions;
};

module.exports = registrationConfirmation;
