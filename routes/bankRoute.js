const express = require('express');
const router = express.Router();
const bankController = require('../controllers/bankController');

router.get('/banks', bankController.getBankList);
router.get('/branches/:ifsc', bankController.getBranchDetails);
router.get('/banks/:bankName/branches', bankController.getBranchesByBankName);
router.get('/branches/city/:cityName', bankController.getBranchesByCity);

module.exports = router;
