const express = require('express');
const app = express();

// Import the doctors data from your schema module
const doctorsdata = require('./models/schema');

// Define routes for specific professions
app.get('/doctors/dentists', (req, res) => {
  const dentists = doctorsdata.filter((doctor) => doctor.profession === 'Dentist');
  res.json(dentists);
});

app.get('/doctors/gynecologists', (req, res) => {
  const gynecologists = doctorsdata.filter((doctor) => doctor.profession === 'Gynecologist');
  res.json(gynecologists);
});

app.get('/doctors/nutritionists', (req, res) => {
  const nutritionists = doctorsdata.filter((doctor) => doctor.profession === 'Nutrition');
  res.json(nutritionists);
});

// Start the Express server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
