const router = require('express').Router();
const htmlRoute = require('./notes.js');

router.use(htmlRoute);

module.exports = router;