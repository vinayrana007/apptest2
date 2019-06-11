// A simple web application for serving three api endpoints
"use strict";

// Import necessary libraries
const express = require('express');
const app = express();

const port = 3000 // Port on which incoming requests will arrive

app.use('/', require('./routes/index')); // Connect the base route to the route handling function stored inside /routes/index 
app.use('/health', require('./routes/health')); // Connect the /health route to the route handling function stored /routes/health
app.use('/metadata', require('./routes/meta')); // Connect the /metadata route to the route handling function stored /routes/meta

// Run the web app and store the returned variable for later export 
let server = app.listen(port, () => console.log(`Listening on ${port}`));
module.exports = server; // Export the server for unit testing 
