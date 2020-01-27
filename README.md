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

5. Create a .env file in the client folder too. There you have to add your Mapbox Token (if you want to use Mapbox style). The key must start with `REACT_APP_<nameWhatyouWant>` because it is a project created with [Create React App](https://github.com/facebook/create-react-app)
   The .env could look like this:

   ```
   # Mapbox

   REACT_APP_MAPBOX_TOKEN=<yourMapboxToken>

   ```

6. For a working backend you need [mongodb](https://docs.mongodb.com/manual/administration/install-community/) on your machine.

---

## Run the website local on your machine

Open three terminals.

First terminal: `sudo service mongod start` (Linux)

Second terminal: `npm run client`

Third terminal: `npm run server`
