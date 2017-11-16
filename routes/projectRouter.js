const Router = require('express').Router;
const Project = require(__dirname + '/../models/project');
const bodyParser = require('body-parser').json();
const projectRouter = module.exports = new Router();

projectRouter.post('/projects', bodyParser, (req, res) => {
  var newProject = new Project(req.body);
  newProject.save((err, data) => {
    if (err) {
        return res.status(500).json({
      msg: 'there was an error while trying to retrieve data'
      });
    }
    res.status(200).json(data);
  });
});

projectRouter.get('/projects', (req, res) => {
  Project.find({}, (err, data) => {
    if (err) {
        return res.status(500).json({
      msg: 'there was an error while trying to retrieve data'
      });
    }
    res.status(200).json(data);
  });
});

projectRouter.get('/projects/featured', (req, res) => {
  Project.find({ featured: true }, (err, data) => {
    if (err) {
        return res.status(500).json({
      msg: 'there was an error while trying to retrieve data'
      });
    }
    res.status(200).json(data);
  });
});

projectRouter.delete('/projects/:id', (req, res) => {
  Project.remove({ _id: req.params.id }, (err) => {
    if (err) {
        return res.status(500).json({
      msg: 'there was an error while trying to retrieve data'
      });
    }
    res.status(200).json({
      msg: 'project has been removed'
    });
  });
});
