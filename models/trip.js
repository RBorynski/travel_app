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
Trip.Visited = () => { return db.any('SELECT * FROM plans_table WHERE visited = true');}




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
Trip.Delete = (subject) => {
  return db.result('DELETE FROM plans_table WHERE subject = $1', [subject]);
}


module.exports = Trip;
//exporting Trip and its functions for use in a different file
