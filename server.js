const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res) => {
  res.status(404).send('Page not found!');
});

module.exports = app.listen(PORT, () => console.log('server up on port: ' + PORT));
