const express = require('express');

const Actions = require('../data/helpers/actionModel.js');

const mdlware = require('../middleware/index.js');

const router = express.Router();

router.use(express.json());

router.get('/', (req, res, next) => {
  Actions.get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => next(error));
});

router.get('/:id', (req, res) => {
    Actions.get(req.params.id)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: 'Action not found' });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the action',
      });
    });
  });

router.post('/', mdlware.validate('project_id'), mdlware.validate('description'), mdlware.validate('notes'), (req, res, next) => {
  Actions.insert(req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => next(error));
});

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: 'The action has been removed' });
      } else {
        res.status(404).json({ message: 'The action could not be found' });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error removing the action',
      });
    });
  });


router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: 'The action could not be found' });
      }
    })
    .catch(error => {
      // log error to server
      console.log(error);
      res.status(500).json({
        message: 'Error updating the action',
      });
    });
  });

module.exports = router;
