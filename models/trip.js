// const pgp = require('pg-promise')({});
// //pgp will require pg promise
// const connectionURL = 'postgres://localhost:5432/tourist_database';
//connecting to the local database
const db = require('../database/connection');
//connrcting promise and the url
const Trip = {}
// task to do
// server file-
// app post, login, sign up, get, post{
//   /*optional stuff to do after success */
// });
Trip.notVisited = () => { return db.any('SELECT * FROM plans_table WHERE visited = false');}
//all the places that you have not visited
Trip.Visited = () => { return db.any('SELECT * FROM plans_table WHERE visited = true');}
// all the places that you have visited



// U

// when someone clicks the button saying they've visited the place, update the place record to say visited = true

Trip.findById = id  => {
  return db.one('SELECT * FROM plans_table WHERE id = $1', [id]);
}

Trip.Create = tripData => {
  return db.one('INSERT INTO plans_table (landmark, city, comment, visited) VALUES($1, $2, $3, $4) RETURNING id', [tripData.landmark, tripData.city, tripData.comment, false]);
};

// Trip.Edit = changedData =>
//  {
//   return db.none('UPDATE city SET title = $1, author = $2 WHERE id = $3', [book.title, book.author, book.id]);
// }

  Trip.MarkVisited = id =>
 {
  return db.none('UPDATE plans_table SET visited = $1 WHERE id = $2', [true, id ]);
}
//make that someone has visited a place when they do click on a button
Trip.Delete = (id) => {
  return db.none('DELETE FROM plans_table WHERE id = $1', [id]);
}
//deletes from the plans table if you change your about going somewhere


module.exports = Trip;
//exporting Trip and its functions for use in a different file
