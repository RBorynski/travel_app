const express = require("express"); //the function of express requieres express in order to work
const bodyParser = require("body-parser"); //the const bodyParser requires body-parser
const Trip = require("./models/trip.js"); //importing models from the trip.js file
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const app = express();
app.set("view engine", "ejs");
const PORT = 3000;
//setting the Port as 3000
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
//
//allows for method override to use in the edit function//
// app.use("/client", ,express.static('./assets/'))
// app.use(methodOverride('-method'));
const jsonParser = bodyParser.json();
//jsonifying bodyParser
const notVisited = Trip.notVisited;
const Create = Trip.Create;
const MarkVisited = Trip.MarkVisited;
const findById = Trip.findById;
const Delete = Trip.Delete;
const Visited = Trip.Visited;
//setting all of the imports as variables
const bcrypt = require("bcrypt");
//locking bcrypt in a variable

const salt = "$2a$10$9V/bxZfoJlwprsVzhrM1UO";

app.get("/", (request, response) => {
  // run query then resolve promise
  notVisited().then(everyTrip => {
    response.render("index", { everyTrip: everyTrip });
  });
});
//takes the export of notVisited and calls for it to be rendered in index on the routhe Check It Out

app.post("/CheckItOut/:id", (request, response) => {
  const landmarkId = request.params.id;
  //sets a  variable for parameter in the ID
  MarkVisited(landmarkId);
  //edits the boolean of visited from  true to falso, which also changes the page that the results will be rendered in
  response.redirect(`/CheckItOut/AlreadyVisited`);
  //redirect to the already visited endpoint
});
app.delete("/CheckItOut/:id/delete", (request, response) => {
  const landmarkId = request.params.id;
  //sets a  variable for parameter in the ID
  Delete(landmarkId);
  response.redirect("/");
  //redirect to the already visited tav
});

app.get("/CheckItOut/New", (request, response) => {
  response.render("New");
});
//Create a route to get to the view to create new views in the places to go table
app.get("/CheckItOut/AlreadyVisited", (request, response) => {
  Visited().then(Trip => {
    response.render("visited", { Trip: Trip });
    //when someone gets to the endpoint of that, the Visited function  gets rendered in the visited view
  });
});

app.post("/CheckItOut", urlencodedParser, (request, response) => {
  console.log("this is request.body:", request.body);
  //checking to see  if data is being passed on
  Create(request.body)
    //create a nw destination before going back to/ being redirected to CheckItOut
    .then(data => {
      response.redirect(`/`);
      //redirect to Check It OUt
    })
    .catch(error => {
      response.send(error);
    });
});

// const passwordEnteredByUser = data.password;
// const passwordToSend = brcypt.

app.listen(PORT, () => {
  console.log(`server is listening on PORT ${PORT} baby!`);
});
