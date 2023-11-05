const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
const path = require('path');
const fs = require('fs');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const API_URL = 'http://api.aviationstack.com/v1/flights';
// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));
router.use(express.json());

// Dashboard
router.get('/home', ensureAuthenticated, (req, res) => {
  const filePath = path.join(__dirname, '..', 'airports.json');
  const rawData = fs.readFileSync(filePath, "utf-8");
  const airportsData = JSON.parse(rawData); // covert json to object
  req.session.airportsData = airportsData; // new
  res.render('dashboard', {
    user: req.user,
    flightData: req.session.flightData,
    airportsData: req.session.airportsData
  })
});
// Flight form- this route will handle the form data entered by the user and show the flight info from the json received in the same page

router.post('/home', ensureAuthenticated, async (req, res) => {
  console.log(req.body);
  try {
    const result = await axios.get(API_URL, {
      params: {
        access_key: process.env.API_KEY,
        dep_iata: req.body.departure,
        arr_iata: req.body.arrival,
      },
    });
    // For airports cities and IATA populating dropdown of departure and arrival
    
    const flightStatus = req.body.flightStatus;
    // API
    const response = result.data
    const flightData = response["data"].filter(item => item.flight_status === flightStatus); //this line may have a problem
    // set session variables for flightData from API and airportsData from JSON
    req.session.flightData = flightData; // new
    res.redirect('/home'); //res.render('dashboard', { flightData, user: req.user })
  } catch (error) {
    flightData = null;
    req.session.flightData = flightData;
    //res.status(404).send(error.message);
    console.log(error.message)
  }
});

module.exports = router;