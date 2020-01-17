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

router.get('/:id/actions', (req, res) => {
    Projects.getProjectActions(req.params.id)
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

router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The user has been removed' });
      } else {
        res.status(404).json({ message: 'The user could not be found' });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error removing the user',
      });
    });
  });


router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'The user could not be found' });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the user',
      });
    });
  });

module.exports = router;
