const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('', controller.flights);
router.post('/create-flight', controller.newFlight);
router.patch('/:id', controller.updateFlight);
router.delete('/:id', controller.deleteFlight);

router.get('/:id', controller.getFlight);

module.exports = router;

