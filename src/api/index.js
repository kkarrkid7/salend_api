"use strict"

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send({"data": "root"});
});

module.exports = router;