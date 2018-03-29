const express = require('express');//the function of express requieres express in order to work
const bodyParser = require('body-parser')//the const bodyParser requires body-parser
const Trip = require('./models/trip.js')//importing models from the trip.js file
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const  app = express();
app.set('view engine', 'ejs');
  const PORT = 3000;
  //setting the Port as 3000
const methodOverride = require('method-override');
app.use = (methodOverride('_method'))
//allows for method override to use in the edit function
//   app.use("/client", ,express.static('./assets/'))
//   app.use(methodOverride('-method'));
const jsonParser = bodyParser.json();
//jsonifying bodyParser
const notVisited = Trip.notVisited
const Create = Trip.Create
const MarkVisited = Trip.MarkVisited
const findById =Trip.findById
Visited = Trip.Visited

const bcrypt = require("bcrypt")
//locking bcrypt in a variable

 const salt = '$2a$10$9V/bxZfoJlwprsVzhrM1UO'

 app.get('/CheckItOut', (request, response) => {
  // run query then resolve promise
  notVisited().then(everyTrip => {
    response.render('index', { everyTrip: everyTrip })
  })
})


app.post('/CheckItOut/:id', (request, response)=> {
  const landmarkId = request.params.id;
  MarkVisited(landmarkId);
  response.redirect(`/CheckItOut/AlreadyVisited`);
});


 app.get('/CheckItOut/New', (request, response) => {
    response.render('New')
})
//Create a route to get to the view to create new views in the places to go table
 app.get("/CheckItOut/AlreadyVisited", (request, response) => {
    Visited().then(Trip => {
      response.render('visited', {Trip: Trip})
})
})

app.post('/CheckItOut', urlencodedParser, (request, response) => {
  console.log("this is request.body:", request.body);
  Create(request.body)
    .then((data) => {
      response.redirect(`/CheckItOut`)
    })
    .catch((error) => {
      response.send(error);
    })
});


// const passwordEnteredByUser = data.password;
// const passwordToSend = brcypt.

app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT} baby!`);
});
