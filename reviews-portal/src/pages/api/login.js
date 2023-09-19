const express = require("express");
const app = require('express')();
//const { v4 } = require('uuid');
const cors = require("cors");
const db = require("./app/models");

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