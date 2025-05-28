const projects = require('../data/projects.json');

exports.getProjects = (req, res) => {
  res.json(projects);
};
