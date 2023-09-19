const app = require('express')();
const { v4 } = require('uuid');
const cors = require("cors");
const express = require("express");
const db = require("./app/models");
const { CheckUser } = require('../src/checker/verifySignUp');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const User = db.user;

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.post('/api/signup', (req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  CheckUser()

  User.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    reviews: [],
    likes: [],
    role: req.body.role
  })
  .then(() => {
      res.send({ message: "User was registered successfully!" });
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
});

app.post('/api/signin', (req,res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      const token = jwt.sign(
        { id: user.id },
         "secret",
        {
          algorithm: 'HS256',
          allowInsecureKeySizes: true,
          expiresIn: 86400,
        }
      );

        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role,
          accessToken: token
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
});

module.exports = app;