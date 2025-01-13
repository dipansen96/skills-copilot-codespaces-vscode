// Create web server
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});