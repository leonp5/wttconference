## WTT Conference

"wttConference" is a responsive website for conference of teacher trainees (22-06-2020 - 28-06-2020).
It shows the conference information, makes a online registration possible and gives the promoters of the conference the possibility to see how many persons have registered.

---

## Getting started

1. clone/fork the repository

2. Go into the root directory and run `npm install`

3. In the client folder run `npm install` too

4. Further you need a .env file in the root folder with the necessary access informations for running a mongoDB and the mailgun package.  
   For more informations concerning mailgun look [here](https://github.com/mailgun/mailgun-js) and [here](https://www.mailgun.com/).  
   Your .env file should look like this:

   ```
   DB_NAME=<dabasename>
   PORT=<portnumber>

   MONGO_URL=<mongoURL>

   # Mailgun

   MAILGUN_API=<mailgunAPI>
   MAILGUN_DOMAIN=<mailgunDomain>
   ```

---

## Run the website local on your machine

Open two terminals.

First terminal: `npm run client`

Second terminal: `npm run server`
