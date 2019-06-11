// This file handles the base route
"use strict";

const routes =  require('express').Router();

routes.get('/', (req, res) => {
    res.send("Hello! Docker Fans."); // Reply with "Custom Message"
});

module.exports = routes; 
