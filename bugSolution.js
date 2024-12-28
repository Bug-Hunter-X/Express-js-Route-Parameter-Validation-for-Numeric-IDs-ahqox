const express = require('express');
const app = express();
app.get('/users/:id(\d+)', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  // ... some database query to fetch user data based on userId ...
  if (!userData) {
    return res.status(404).send('User not found');
  }
  res.send(userData);
});
//Solution: Using regular expression in the route definition to ensure only numeric values are accepted as id.  The parseInt function also ensures the parameter is an integer.