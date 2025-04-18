const express = require('express');
const router = express.Router();
const bugController = require('../controllers/bugController');

router.post('/', bugController.submitBug);
router.get('/', bugController.getAllBugs);
module.exports = router;
