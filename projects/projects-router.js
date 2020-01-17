const express = require('express');

const Projects = require('../data/helpers/projectModel.js');

const mdlware = require('../middleware/index.js');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res, next) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => next(error));
});

router.get('/:id', (req, res) => {
    Projects.get(req.params.id)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: 'Project not found' });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the project',
      });
    });
  });

router.post('/', mdlware.validate('name'), mdlware.validate('description'), (req, res, next) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => next(error));
});



module.exports = router;
