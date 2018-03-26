const pgp = require('pg-promise')({});
//pgp will require pg promise
const connectionURL = 'postgres://localhost:5432/tourist_database';
//connecting to the local database
const db = pgp(connectionURL);
//connrcting promise and the url
const Trip = {}
// task to do
// server file-
// app post, login, sign up, get, post{
//   /*optional stuff to do after success */
// });
Trip.findAll = () => { return db.any('SELECT * FROM plans_table');}

// Trip.vistedPlaces
 //  SELECT * FROM plans_table WHERE visited = true;

// Trip.notYetVisited
  //  SELECT * FROM plans_table WHERE visited = false;

// Update the table in the database to add a "visited" column that accepts a Boolean

// when someone clicks the button saying they've visited the place, update the place record to say visited = true

Trip.findById = id  => {
  return db.one('SELECT * FROM plans_table WHERE id = $1', [id]);
}

Trip.Create = taskData => {
  return db.one('INSERT INTO plans_table (subject, content) VALUES($1, $2) RETURNING id', [taskData.subject, taskData.content]);
};

Trip.Edit = changedData =>
 {
  return db.none('UPDATE city SET title = $1, author = $2 WHERE id = $3', [book.title, book.author, book.id]);
}
Trip.Delete = (subject) => {
  return db.result('DELETE FROM plans_table WHERE subject = $1', [subject]);
}


module.exports = Trip;
//exporting Trip and its functions for use in a different file
