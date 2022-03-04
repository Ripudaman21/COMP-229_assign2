let express = require('express');
let router = express.Router();

let userdbController = require('../controllers/userdb');

/* GET users listing. */
router.get('/', userdbController.list);
module.exports = router;
/* GET users listing. */
router.get('/list', userdbController.list);

// Get method to Render the Add Items Page
router.get('/add', userdbController.displayAddPage);
// Post method to handle the Add Items process
router.post('/add', userdbController.processAddPage);

// Get method to Render the Edit Items Page
router.get('/edit/:id', userdbController.displayEditPage);
// Post method to handle the Edit Items process
router.post('/edit/:id', userdbController.processEditPage);

// Precess Delete items
router.get('/delete/:id', userdbController.performDelete);

module.exports = router;