const mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
  shortDesc: { type: String, required: true },
  overViewHTML: { type: String, required: true },
  githubUrl: { type: String },
  liveProject: { type: String },
  designImages: [String],
  designHTML: { type: String },
  featured: { type: Boolean, required: true }
});

module.exports = mongoose.model('Project', projectSchema);
