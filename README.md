## moved the project to GitLab: https://gitlab.com/leonp5/whfm

## WTT Conference

"wttConference" is a responsive website for conference of teacher trainees.
It shows the conference information, makes a online registration possible and gives the promoters of the conference the possibility to see how many persons have registered.

---

## Getting started

1. clone/fork the repository

2. Go into the root directory and run `npm install`

3. Further you need a .env file in the root folder with the necessary access informations for running a [MongoDB](https://github.com/mongodb/node-mongodb-native), [nodemailer](https://github.com/nodemailer/nodemailer) and [bcrypt](https://github.com/kelektiv/node.bcrypt.js) package.

   Your `.env` file should look like this:

   ```
   # MongoDB

   DB_NAME=<dabasename>
   PORT=<portnumber>

   MONGO_URL=<mongoURL>

   # Mail

   EMAIL_HOST=<host>
   INFO_MAIL=<email_address>
   INFO_MAIL_PW=<password>

   WORKSHOP_MAIL=<email_address>
   WORKSHOP_MAIL_PW=<password>

   # Token

   JWT=<yourToken>
   ```

4) Create a `.env` file in the client folder too. There you have to add your Mapbox Token (if you want to use Mapbox style). The key must start with `REACT_APP_<nameWhatyouWant>` because it is a project created with [Create React App](https://github.com/facebook/create-react-app)

   The .env could look like this:

   ```

   # Mapbox

   REACT_APP_MAPBOX_TOKEN=<yourMapboxToken>

   ```

5. For a working backend you need [mongodb](https://docs.mongodb.com/manual/administration/install-community/) on your machine.

---

## Run the website local on your machine

Open three terminals.

First terminal: `sudo service mongod start` (Linux)

Second terminal: `npm run client`

Third terminal: `npm run server`
