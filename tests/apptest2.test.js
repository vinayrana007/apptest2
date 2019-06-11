// Script for unit testing all the routes inside app.js
"use strict"

// Import necessary libraries and the app
const request = require('supertest');
const server = require('../app');
const pjson = require('../package.json');
const git = require('git-rev-sync');

const hash = require('child_process') // Create a suboricess and run "git rev-parse HEAD" to get the hash for the last git commit 
  .execSync('git rev-parse HEAD')
  .toString().trim() // Convert the hash to a string and remove all spaces from either end

// Unit tests for testing all the endpoints 
describe("test all the routes in app.js", function(){ 
    afterEach(function () {
        server.close(); // Close the imported server after the unit tests are over so that the CI/CD pipeline and continue 
    });
    // Unit test for testing root endpoint
    it("test root endpoint", function(done){ 
        request(server).get("/")
        .expect(200)
        .expect("Hello! Docker Fans.", done) // Expect to receive "Hello! Docker Fans." and a status code of 200"
    })
    // Unit test for testing /health endpoint
    it("test health endpoint", function(done){
        request(server).get("/health")
        .expect('Content-Type', /json/)
        .expect(200, {status: 200}, done) // Expect to receive a json object and a status code of 200"
    })
    // Unit test for testing /metadata endpoint
    it("test metadata endpoint", function(done){
        request(server).get("/metadata")
        .expect('Content-Type', /json/)
        .expect(200, {"version": pjson.version, "description": pjson.description, "lastcommitsha": hash}, done) // Expect to receive a json object and a status code of 200"
    })
})
