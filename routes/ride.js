var express = require('express');
var router = express.Router();
var ctrlride = require('../controllers/ride');

router.get('/ride', ctrlride.getride);
router.post('/ride', ctrlride.createRide);
router.get('/ride/:rideid',ctrlride.rideInfo);

router.delete('/ride/:rideid', ctrlride.deleteRide);

module.exports = router;