const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.flights);
router.post('create-flight', controller.newFlight);
router.put('edit-flight', controller.updateFlight);
router.delete('delete-flight', controller.deleteFlight);

router.route('/:id')
.get(controller.getFlight);

module.exports = router;

