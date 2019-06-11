// This file handles the /health route
"use strict";

const health = require('express').Router(); // Import express router as health


health.get('/', (req, res) => {
    res.status(200).json({ status: 200 });  // Reply with { status: 200 }
});

module.exports = health;
