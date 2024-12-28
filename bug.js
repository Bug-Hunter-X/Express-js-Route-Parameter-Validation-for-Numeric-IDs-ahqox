const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData); 
});

//Problem: The code does not handle non-numeric user IDs gracefully.
//If a user enters a non-numeric ID, it will lead to an unexpected error rather than a 404. 