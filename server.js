const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const projectRouter = require(__dirname + '/routes/projectRouter');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/db');

app.use('/api', projectRouter);

app.use(express.static(__dirname + '/build'));
app.use(['/project/*', '/portfolio', '/about', '/history'], express.static(__dirname + '/build'));
app.use((req, res) => {
  res.status(404).send('Page not found!');
});

module.exports = app.listen(PORT, () => console.log('server up on port: ' + PORT));
