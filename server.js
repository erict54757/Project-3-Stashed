require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

const db = require("./models");
const passport = require("./utils/passport");
const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.post("/login", (req, res) => {
  const { email, password, type } = req.body;

  switch (type) {
    case "customer": {
      db.Customer.findOne({ where: { email } })
        .then(user => {
          if (!user)
            return res.status(401).json({
              success: false,
              msg: "Authentication failed. Not a User"
            });

          if (password === user.account_key) {
            const token = jwt.sign(user.toJSON(), process.env.CHAT_JWT_SECRET);
            res.json({ success: true, token: "CJWT " + token });
          } else {
            res.status(401).send({
              success: false,
              msg: "Authentication failed. Wrong Password"
            });
          }
        })
        .catch(err => console.log(err));
    }

    case "employee": {
      db.Employee.findOne({ where: { email } })
        .then(user => {
          if (!user)
            return res.status(401).json({
              success: false,
              msg: "Authentication failed. Not a User"
            });

          if (password === user.account_key) {
            const token = jwt.sign(user.toJSON(), process.env.CHAT_JWT_SECRET);
            res.json({ success: true, token: "EJWT " + token });
          } else {
            res.status(401).send({
              success: false,
              msg: "Authentication failed. Wrong Password"
            });
          }
        })
        .catch(err => console.log(err));
    }
  }
});

// Define API routes here (this is using express.Router)
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

let syncOptions = { force: false };

db.sequelize
  .sync(syncOptions)
  .then(() => {
    app.listen(PORT, function() {
      console.log(`🌎 ==> Server now on port ${PORT}!`);
    });
  })
  .catch(err => console.log(err));
