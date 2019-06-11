// This file handles the /metadata route
"use strict";

const meta = require('express').Router();
const git = require('git-rev-sync');
const pjson = require('../package.json');

meta.get('/', (req, res) => {
    // console.log(process.env.npm_package_description)
    let result = {
        "version": pjson.version, // Version number from package.json
        "lastcommitsha": git.long(), // use the git-rev-sync to get the long hash for the last git commit
        "description" : pjson.description // app description from package.json
    }
    res.status(200).json(result); // Reply with the result object
})

module.exports = meta;
