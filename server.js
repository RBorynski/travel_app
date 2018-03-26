const express = require('express');//the function of express requieres express in order to work
const bodyParser = require('body-parser')//the const bodyParser requires body-parser
const Trip = require('./models/trip.js')//importing models from the trip.js file
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const  app = express();
app.set('view engine', 'ejs');
  const PORT = 3000;
  //setting the Port as 3000
const methodOverride = require('method-override');
//allows for method override to use in the edit function
//   app.use("/client", ,express.static('./assets/'))
//   app.use(methodOverride('-method'));
const jsonParser = bodyParser.json();
//jsonifying bodyParser
const findAll = Trip.findAll



const bcrypt = require("bcrypt")
//locking bcrypt in a variable

 const salt = '$2a$10$9V/bxZfoJlwprsVzhrM1UO'

 app.get('/CheckItOut', (request, response) => {
  // run query then resolve promise
  findAll().then(everyTrip => {
    response.render('index', { everyTrip: everyTrip })
  })
})
 app.get('/CheckItOut/Edit', (request, response) => {
    response.render('Edit')
})

 app.get('/CheckItOut/New', (request, response) => {
    response.render('New')
})
//Create a route to get to the view to create new views in the places to go table

  app.get('/CheckItOut/Checkoff', (request, response) => {
    response.render('Checkoff')
    //set up a route to get to the checkoff view, where I check off places I've been, simultaniously deleting them from the plans table and adding them to the places I've been table
})



// const passwordEnteredByUser = data.password;
// const passwordToSend = brcypt.

app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT} baby!`);
});
